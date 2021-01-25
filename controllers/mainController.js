const conf = require("../config/config");
const send = require("./wsSendRequests");    
const closeTradesController = require("./closeTradesController");    
const WebSocket = require('ws');
const schedule = require('node-schedule');

var TIME_DEPENDANT_RUN_FLAG = false;
 
function connect(account) {
    if (account >= 20) { var url = conf.wsLive.url; } else { var url = conf.ws.url; }
    console.log('Connecting to: ' + url);
    return new WebSocket(url);
}


function actionStringToInt(action) {
    if (action == "buy") { return 0; } else { return 1; }
}

function closeTrades(trades, symbol, wSocket, action) {
    var cmd = actionStringToInt(action);
    for (i in trades) {
        // close only trades of oposite direction
        if (trades[i].symbol == symbol && trades[i].cmd != cmd) {
            send.closeTrade(trades[i].position, trades[i].volume, trades[i].close_price, symbol, wSocket);
        }
    }
}

function isExistingTrade(trades, symbol, cmd) {
    return trades.some(item =>  item.cmd === cmd && item.symbol === symbol )
}

function formatScheduleTime(time) {
    const formatedTime = '0 ' + time.minute + ' ' + time.hour + ' * * 1-5';
    return formatedTime;
}


function openDay() {
    schedule.scheduleJob(formatScheduleTime(conf.timedependant.openTime), function(){
        console.log('OPEN DAY');
        TIME_DEPENDANT_RUN_FLAG = true;
    });

}

function closeDay() {
    schedule.scheduleJob(formatScheduleTime(conf.timedependant.closeTime), function(){
        console.log('CLOSE DAY');
        TIME_DEPENDANT_RUN_FLAG = false;

        for (i in conf.timedependant.closeAccounts) {
            for (ii in conf.timedependant.closeSymbols) {
                closeTradesController.close(conf.timedependant.closeSymbols[ii], conf.timedependant.closeAccounts[i]);
            }
        }        
    });
}

module.exports = { run: function (app) {
    openDay();
    closeDay();

    app.post("/:account/:sl/:offset/:tp/:action/:symbol/:volume/:timedependant?", function(req, res) {

        var account = Number(req.params.account);
        var sl = Number(req.params.sl);
        var tp = Number(req.params.tp);
        var offset = Number(req.params.offset);
        var action = req.params.action;
        var symbol = req.params.symbol;
        var volume = Number(req.params.volume);
        var timeDependant = req.params.timedependant;

        // set lock for time dependant
        if (timeDependant == 'true' && !TIME_DEPENDANT_RUN_FLAG) {
            var run = false;
        } else {
            var run = true;
        }

        // lock time dependant
        if (run) {
            const wSocket = connect(account);

            wSocket.onopen = function() {
                console.log('Connected');
                ws = send.login(wSocket, account);
            };

            wSocket.onmessage = function(evt) {
                try {
                    var response = JSON.parse(evt.data);
                    if(response.status == true) {
                        if(response.streamSessionId != undefined) {
                            console.log("Login successful");

                            send.getPreviousTrades(wSocket);

                        } else if (response.returnData.ask != undefined) {
                            /* return getPrice */

                            if (action == "sell") { var price = response.returnData.bid; } else { var price = response.returnData.ask; }
                            send.startTrade(action, symbol, price, volume, wSocket, sl, tp, offset)
                    
                        } else if (response.returnData.order != undefined) {
                            /* return startTrade. Jusr order ID */

                            var order = response.returnData.order;
                            console.log("Order compleated: " + order); // finish

                            // change condition to for also 0 trades open
                        } else if (response.returnData.length > 0) {
                            /* return getPreviousTrades */

                            var cmd = actionStringToInt(action);

                            // only if trade is NOT in same direction (buy / sell)
                            if (!isExistingTrade(response.returnData, symbol, cmd)) {
                                send.getPrice(symbol, wSocket) // ignites new order
                                closeTrades(response.returnData, symbol, wSocket, action);
                            }

                        } else if (response.returnData.length == 0) {
                            /* return getPreviousTrades, none exist. Start first one */

                            send.getPrice(symbol, wSocket)

                        } else {
                            console.log("Disconecting, no action taken.");
                        }
                    } else {
                        console.log('Error: ' + response.errorDescr);
                    }
                } catch (Exception) {
                    console.log('Fatal error while receiving data! :(');
                }
            }

            wSocket.onclose = function() {
                console.log('Connection closed');
            };

        } // close time deendant lock

        res.render("index");
        });
    
    }
}
