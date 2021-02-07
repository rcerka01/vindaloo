// const conf = require("../config/config");
// const send = require("./wsSendRequests");    
// const closeTrades = require("./closeTradesController");    
// const WebSocket = require('ws');
// const schedule = require('node-schedule');

// function connect(account) {
//     if (account >= 20) { var url = conf.wsLive.url; } else { var url = conf.ws.url; }
//     console.log('Connecting to: ' + url);
//     return new WebSocket(url);
// }

// module.exports = { run: function (account, symbol, threshold) {

//     schedule.scheduleJob('0 * 0-7,19-23 * * 1-5', function(){
// //_________________________________________________________________________
//         const wSocket = connect(account);

//         wSocket.onopen = function() {
//             console.log('Connected');
//             ws = send.login(wSocket, account);
//         };

//         wSocket.onmessage = function(evt) {
//             try {
//                 var response = JSON.parse(evt.data);
//                 if(response.status == true) {
//                     if(response.streamSessionId != undefined) {
//                         console.log("Login successful");
//                         send.getPreviousTrades(wSocket);

//                         // change condition to for also 0 trades open
//                     } else if (response.returnData.length > 0) {
//                         /* return getPreviousTrades */

//                         const data = response.returnData;
//                         for (i in data) {
//                             if (data[i].symbol == symbol) {
//                                 if (data[i].profit >= threshold) {
//                                     closeTrades.close(symbol, account);
//                                 }
//                             }
//                         }
//                     } else if (response.returnData.length == 0) {
//                         /* return getPreviousTrades, none exist. Start first one */
//                         send.getPrice(symbol, wSocket)

//                     } else {
//                         console.log("Disconecting, no action taken.");
//                     }
//                 } else {
//                     console.log('Error: ' + response.errorDescr);
//                 }
//             } catch (Exception) {
//                 console.log('Fatal error while receiving data! :(');
//             }
//         }
//         wSocket.onclose = function() {
//             console.log('Connection closed');
//         };

//     //_________________________________________________________________________
//     });

// }}
