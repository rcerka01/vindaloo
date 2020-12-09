const conf = require("../config/config");
const send = require("./wsSendRequests");    
const WebSocket = require('ws');
 
function connect() {
    var url = conf.ws.url;
    console.log('Connecting to: ' + url);
    return new WebSocket(url);
}

function disconnect(ws) {
    return ws.close();
}

function closeTrades(trades, symbol, wSocket) {
    for (i in trades) {
        if (trades[i].symbol == symbol) {
            send.closeTrade(trades[i].position, trades[i].volume, trades[i].close_price, symbol, wSocket);
        }
    }
}

module.exports = { run: function (app) {

    app.post("/:account/:sl/:action/:symbol/:volume", function(req, res) {

        var account = req.params.account;
        var sl = Number(req.params.sl);
        var action = req.params.action;
        var symbol = req.params.symbol;
        var volume = Number(req.params.volume);

        const wSocket = connect();

        wSocket.onopen = function() {
            console.log('Connected');
            ws = send.login(wSocket, Number(account));
        };

        wSocket.onmessage = function(evt) {
            try {
                var response = JSON.parse(evt.data);
                if(response.status == true) {
                    if(response.streamSessionId != undefined) {
                        console.log("Login successful");
                        send.getPreviousTrades(wSocket);
                        send.getPrice(symbol, wSocket)
                    } else if (response.returnData.ask != undefined) {
                        if (action == "sell") { var price = response.returnData.bid; } else { var price = response.returnData.ask; }
                        console.log("Price to " + action + " is " + price)
                        send.startTrade(action, symbol, price, volume, wSocket, sl)
                    } else if (response.returnData.order != undefined) {
                        var order = response.returnData.order;
                        console.log("Order compleated: " + order)
                    } else if (response.returnData.length > 0) {
                        console.log("Runing trades: " + response.returnData.length)
                        closeTrades(response.returnData, symbol, wSocket);
                    } else {
                        console.log("Disconecting, no action taken.");
                        //disconnect(wSocket);
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

        res.render("index");
        });
    }
}
