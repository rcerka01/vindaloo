const conf = require("../config/config");
const send = require("./wsSendRequests");     
const WebSocket = require('ws');

function connect(account) {
    let login = conf.login.find(l => Number(l.id) === account);
    if (login.type === 'real') { var url = conf.wsLive.url; } else { var url = conf.ws.url; }
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

module.exports = { trade: function (account, sl, tp, offset, action, symbol, volume) {
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

}
}
