const conf = require("../config/config");
const send = require("./wsSendRequests");    
const WebSocket = require('ws');
const schedule = require('node-schedule');

function connect() {
    var url = conf.ws.url;
    console.log('Connecting to: ' + url);
    return new WebSocket(url);
}

function disconnect(ws) {
    return ws.close();
}

module.exports = { run: function (symbol, account) {

    console.log('got this')

    schedule.scheduleJob('0 * * * * 1-5', function(){
        console.log('The answer to life, the universe, and everything!');
      

//_________________________________________________________________________
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

                        const data = response.data
                        for (i in data) {
                            console.log(data.profit)
                        }
                        //closeTrades(response.returnData, symbol, wSocket);

                    } else if (response.returnData.length == 0) {
                        /* return getPreviousTrades, none exist. Start first one */
                        send.getPrice(symbol, wSocket)

                    } else {
                        console.log("Disconecting, no action taken.");
                    }
                    https://www.lsm.lv/raksts/zinas/latvija/no-sodienas-iecelosanai-latvija-der-tikai-viena-veida-negativs-covid-19-tests.a390127/       } else {
                    console.log('Error: ' + response.errorDescr);
                }
            } catch (Exception) {
                console.log('Fatal error while receiving data! :(');
            }
        }
        wSocket.onclose = function() {
            console.log('Connection closed');
        };


    //_________________________________________________________________________
});

     }
}
