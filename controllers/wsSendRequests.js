const conf = require("../config/config");

function sendLogin(ws, account) {
    var msg = {};
    msg.command = "login";
    var arguments = {};
    arguments.userId = conf.login[Number(account) - 1].user;
    arguments.password = conf.login[Number(account) - 1].password;
    msg.arguments = arguments;
    //console.log('Trying to log in as: ' + msg.arguments.userId);
    try {
        var msg = JSON.stringify(msg);
        ws.send(msg);
       // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
    }
}

function sendGetPrice(symbol, ws) {
    var msg = {};
    msg.command = "getSymbol";
    var arguments = {};
    arguments.symbol = symbol;
    msg.arguments = arguments;
    console.log('Looking price for: ' + msg.arguments.symbol);
    try {
        var msg = JSON.stringify(msg);
        ws.send(msg);
        // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
    }
}

function sendStartTrade(action, symbol, price, volume, wSocket, sl, offset) {
    if (action == "sell") { 
        var cmd = 1; 
        if (sl != 0) { sl = price + sl; }
    } else { 
        var cmd = 0;
        if (sl != 0) { sl = price - sl; }
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
    tradeTransInfo.offset = offset;
    arguments.tradeTransInfo = tradeTransInfo;
    msg.arguments = arguments;
    try {
        var msg = JSON.stringify(msg);
        wSocket.send(msg);
        // console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
    } catch(Exception) {
        console.error('Error while sending data: ' + Exception.message);
    }
}

function sendCloseTrade(position, volume, price, symbol, wSocket) {
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
    }
}

function sendGetPreviousTrades(wSocket) {
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
    }
}

module.exports = {
    login: function login(ws, account) { sendLogin(ws, account); },
    getPrice: function getPrice(symbol, ws) { sendGetPrice(symbol, ws); },
    startTrade: function startTrade(action, symbol, price, volume, wSocket, sl, offset) { sendStartTrade(action, symbol, price, volume, wSocket, sl, offset); },
    closeTrade: function closeTrade(position, volume, price, symbol, wSocket) { sendCloseTrade(position, volume, price, symbol, wSocket); },
    getPreviousTrades: function getPreviousTrades(wSocket) { sendGetPreviousTrades(wSocket); }
}
