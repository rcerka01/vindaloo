const conf = require("../config/config");
const errorsModel = require("../models/Errors");

function validateErrorMsg(msg) {
    if (!typeof msg === undefined) { return msg; }
    return "";
}

function sendLogin(dbClient, ws, account) {
    var msg = {};
    msg.command = "login";
    var arguments = {};
    
    let login = conf.login.find(l => Number(l.id) === account);
    arguments.userId = login.user;
    arguments.password = login.password;
    msg.arguments = arguments;
    //console.log('Trying to log in as: ' + msg.arguments.userId);
    try {
        var msg = JSON.stringify(msg);
        ws.send(msg);
       // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
        errorsModel.saveError(dbClient, 0, "", account, 'WS, sendGetPrice(), MESSAGE' + JSON.stringify(msg)  + ' ERROR: ' + validateErrorMsg(Exception.message));
    }
}

function sendGetPrice(dbClient, symbol, ws) {
    var msg = {};
    msg.command = "getSymbol";
    var arguments = {};
    arguments.symbol = symbol;
    msg.arguments = arguments;
    try {
        var msg = JSON.stringify(msg);
        ws.send(msg);
        // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
        errorsModel.saveError(dbClient, 0, symbol, 0, 'WS, sendGetPrice(), MESSAGE' + JSON.stringify(msg)  + ' ERROR: ' + validateErrorMsg(Exception.message));
    }
}

function sendStartTrade(dbClient, action, symbol, price, volume, wSocket, sl, tp, offset) {
    const nrFormated = (nr) => { return Number(nr.toFixed(5)); }
    offset = offset * 10;
    if (action == "sell") { 
        var cmd = 1; 
        if (sl != 0) { sl = (price + sl / 10000); }
        if (tp != 0) { tp = (price - tp / 10000); }
        sl = nrFormated(sl);
        tp = nrFormated(tp);
    } else { 
        var cmd = 0;
        if (sl != 0) { sl = (price - sl / 10000); }
        if (tp != 0) { tp = (price + tp / 10000); }
        sl = nrFormated(sl);
        tp = nrFormated(tp);
    }
    var msg = {};
    msg.command = "tradeTransaction";
    var arguments = {};
    var tradeTransInfo = {};
    tradeTransInfo.cmd = cmd;
    tradeTransInfo.price = price;
    tradeTransInfo.symbol = symbol;
    tradeTransInfo.type = 0;
    tradeTransInfo.volume = volume;
    tradeTransInfo.sl = sl;
    tradeTransInfo.tp = tp;
    tradeTransInfo.offset = offset;
    arguments.tradeTransInfo = tradeTransInfo;
    msg.arguments = arguments;
    try {
        var msg = JSON.stringify(msg);
        wSocket.send(msg);
        // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
        errorsModel.saveError(dbClient, 0, symbol, 0, 'WS, sendStartTrade(), MESSAGE' + JSON.stringify(msg)  + ' ERROR: ' + validateErrorMsg(Exception.message));
    }
}

function sendCloseTrade(dbClient, position, volume, price, symbol, wSocket) {
    var msg = {};
    msg.command = "tradeTransaction";
    var arguments = {};
    var tradeTransInfo = {};
    tradeTransInfo.cmd = 0;
    tradeTransInfo.order = position;
    tradeTransInfo.volume = volume;
    tradeTransInfo.price = price;
    tradeTransInfo.symbol = symbol;
    tradeTransInfo.type = 2;
    arguments.tradeTransInfo = tradeTransInfo;
    msg.arguments = arguments;
    try {
        var msg = JSON.stringify(msg);
        wSocket.send(msg);
        // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
        errorsModel.saveError(dbClient, 0, symbol, 0, 'WS, sendCloseTrade(), MESSAGE' + JSON.stringify(msg)  + ' ERROR: ' + validateErrorMsg(Exception.message));
    }
}

function sendGetPreviousTrades(dbClient, wSocket) {
   var msg = {};
   msg.command = "getTrades";
   var arguments = {};
   arguments.openedOnly = true;
   msg.arguments = arguments;
   try {
       var msg = JSON.stringify(msg);
       wSocket.send(msg);
       // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
       console.error('Error while sending data: ' + Exception.message);
       errorsModel.saveError(dbClient, 0, "", 0, 'WS, sendGetPreviousTrades(), MESSAGE' + JSON.stringify(msg)  + ' ERROR: ' + validateErrorMsg(Exception.message));
    }
}

module.exports = {
    login: function login(dbClient, ws, account) { sendLogin(dbClient, ws, account); },
    getPrice: function getPrice(dbClient, symbol, ws) { sendGetPrice(dbClient, symbol, ws); },
    startTrade: function startTrade(dbClient, action, symbol, price, volume, wSocket, sl, tp, offset) { sendStartTrade(dbClient, action, symbol, price, volume, wSocket, sl, tp, offset); },
    closeTrade: function closeTrade(dbClient, position, volume, price, symbol, wSocket) { sendCloseTrade(dbClient, position, volume, price, symbol, wSocket); },
    getPreviousTrades: function getPreviousTrades(dbClient, wSocket) { sendGetPreviousTrades(dbClient, wSocket); }
}
