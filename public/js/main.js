var action = urlParam("action");
var symbol = urlParam("symbol");
var volume = Number(urlParam("volume"));
 
var wSocket = connect();

wSocket.onopen = function() {
    console.log('Connected');
    ws = login(wSocket);
};


wSocket.onmessage = function(evt) {
    try {
      var response = JSON.parse(evt.data);
      if(response.status == true) {
        if(response.streamSessionId != undefined) {
            console.log("Login successful");
            getPreviousTrades(wSocket);
            getPrice(symbol, wSocket)
        } else if (response.returnData.ask != undefined) {
            if (action == "sell") { var price = response.returnData.bid; } else { var price = response.returnData.ask; }
            console.log("Price to " + action + " is " + price)
            startTrade(action, symbol, price, volume, wSocket)
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
        alert('Error: ' + response.errorDescr);
      }
    } catch (Exception) {
      alert('Fatal error while receiving data! :(');
    }
}


wSocket.onclose = function() {
    console.log('Connection closed');
};

