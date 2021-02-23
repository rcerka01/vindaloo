const conf = require("../config/config");
const singleTradeController = require("./singleTradeController");     
const multipleTradeController = require("./multipleTradeController");     

module.exports = { run: function (app) {

    function isLockedAccount(account) {
        return conf.lockedAccounts.includes(account);
    }

    app.post("/:account/:action", function(req, res) {

        var account = Number(req.params.account);
        var action = req.params.action;

        // lock account 
        if (!isLockedAccount(account)) {
            multipleTradeController.trade(account, action);
        }

        res.render("index");
    });
    

    app.post("/:account/:sl/:offset/:tp/:action/:symbol/:volume", function(req, res) {

        var account = Number(req.params.account);
        var sl = Number(req.params.sl);
        var tp = Number(req.params.tp);
        var offset = Number(req.params.offset);
        var action = req.params.action;
        var symbol = req.params.symbol;
        var volume = Number(req.params.volume);

        // lock account 
        if (!isLockedAccount(account)) {
            singleTradeController.trade(account, sl, tp, offset, action, symbol, volume);
        }

        res.render("index");
    });
    
}
}
