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

module.exports = { close: function (symbol, account) {
        const wSocket = connect();

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

                        // change condition to for also 0 trades open
                    } else if (response.returnData.length > 0) {
                        /* return getPreviousTrades */
                        closeTrades(response.returnData, symbol, wSocket);

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
