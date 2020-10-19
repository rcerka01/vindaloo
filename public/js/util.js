// JQuery GET URL params
var urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

function connect() {
    var ws;
    var url = "wss://ws.xapi.pro/demo";
    console.log('Connecting to: ' + url);
    ws = new WebSocket(url);
    return ws;
  }

  function disconnect(ws) {
    ws.close();
    return ws;
  }
  
  function login(ws) {
    var msg = {};
    msg.command = "login";
    var arguments = {};
    arguments.userId = puppet;
    arguments.password = puddle;
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

  function getPrice(symbol, ws) {
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

function startTrade(action, symbol, price, volume, wSocket){
    if (action == "sell") { var cmd = 1; } else { var cmd = 0; }
    var msg = {};
    msg.command = "tradeTransaction";
    var arguments = {};
    var tradeTransInfo = {};
    tradeTransInfo.cmd = cmd;
    tradeTransInfo.price = price;
    tradeTransInfo.symbol = symbol;
    tradeTransInfo.type = 0;
    tradeTransInfo.volume = volume;
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

function closeTrade(position, volume, price, symbol, wSocket) {
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

function getPreviousTrades(wSocket) {
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

function closeTrades(trades, symbol, wSocket) {
    for (i in trades) {
        if (trades[i].symbol == symbol) {
            closeTrade(trades[i].position, trades[i].volume, trades[i].close_price, symbol, wSocket);
        }
    }
}
