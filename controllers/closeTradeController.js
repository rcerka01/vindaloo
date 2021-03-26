const conf = require("../config/config");
const send = require("./wsSendRequests");     
const WebSocket = require('ws');

function connect(account) {
    let login = conf.login.find(l => Number(l.id) === account);
    if (login.type === 'real') { var url = conf.wsLive.url; } else { var url = conf.ws.url; }
    console.log('Connecting to: ' + url);
    return new WebSocket(url);
}

function closeTrades(trades, symbol, wSocket) {
    for (i in trades) {
        send.closeTrade(trades[i].position, trades[i].volume, trades[i].close_price, symbol, wSocket);
    }
}

module.exports = { close: function (account, symbol) {
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

                } else if (response.returnData.length > 0) {
                    
                    closeTrades(response.returnData, symbol, wSocket);

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
