const conf = require("../config/config");
const send = require("./wsSendRequests");
const errorsModel = require("../models/Errors");
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

function tradeDirectionToDigit(direction) {
    if (direction === "buy") {
        return 0;
    } else if (direction === "sell") {
        return 1;    
    } else {
        return -1;
    }
}

module.exports = { close: function (dbClient, account, symbol, tradeDirection) {

    function validateErrorMsg(msg) {
        if (!typeof msg === undefined) { return msg; }
        return "";
    }

    const cmd = tradeDirectionToDigit(tradeDirection);

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
                    
                    if (cmd < 0) {
                        closeTrades(response.returnData, symbol, wSocket);
                    } else {
                        const tradesToClose =  response.returnData.filter(data => 
                            data.symbol === symbol && data.cmd === cmd);
                        closeTrades(tradesToClose, symbol, wSocket);
                    }                    

                } else {
                    console.log("Disconecting, no action taken.");
                }
            } else {
                console.log('Error: ' + response.errorDescr);
                errorsModel.saveError(dbClient, 0, symbol, account, 'CloseTradeController, Error: ' + validateErrorMsg(response.errorDescr));
            }
        } catch (Exception) {
            console.log('Fatal error while receiving data! :(');
            errorsModel.saveError(dbClient, 0, symbol, account, 'CloseTradeController, Fatal error while receiving data! :(, Error: ' + validateErrorMsg(Exception.message));
        }
    }

    wSocket.onclose = function() {
        console.log('Connection closed');
    };

}}
