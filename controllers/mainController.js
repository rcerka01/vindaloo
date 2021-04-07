const conf = require("../config/config");
const singleTradeController = require("./singleTradeController");     
const multipleTradeController = require("./multipleTradeController");     
const mfController = require("./mfController");     
const closeTradeController = require("./closeTradeController");     

module.exports = { run: function (app) {

    function isLockedAccount(account) {
        return conf.lockedAccounts.includes(account);
    }

    app.post("/close/:account/:symbol", function(req, res) {

        var account = Number(req.params.account);
        var name = req.params.symbol;

        closeTradeController.close(account, name);

        res.render("index");
    });

    app.post("/multiple-factor/:key/:value", function(req, res) {

        var key = req.params.key;
        var value = Number(req.params.value);

        mfController.createOrUpdate(key, value);

        res.render("index");
    });

    app.get("/display-factors", function(req, res) {

        var factors = mfController.getFactors();

        let output = "<ul>";
        let count = 1;

        for (let [key, value] of factors) {
            output = output + "<li>" + count++  + " " + key + ' => ' + value + "</li>";
        }

        output = output + "</ul>";

        for (let [key, value] of factors) {
            output = output + "curl -X POST " + "http://" + req.headers.host + "/multiple-factor/"
            + key + "/" + value
            + "<br>";
        }

        res.render("factors", { output });
    });

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
    
}}
