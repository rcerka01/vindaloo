const conf = require("../config/config");
const utilities = require("./utilities");
const singleTradeController = require("./singleTradeController");     
const multipleTradeController = require("./multipleTradeController");     
const closeTradeController = require("./closeTradeController");  
const mfController = require("./mfController");     
const scheduleController = require("./scheduleController");     
const lockedAccountsController = require("./lockedAccountsController");     
const mfParametersModel = require("../models/MfParameters");
const mfTradesModel = require("../models/MfTrades");
const errorsModel = require("../models/Errors");
const schEventsModel = require("../models/SchEvents");

module.exports = { run: async function (app, dbClient) {

    // set factors from db at starting
    const factorsFromDB = await mfParametersModel.findAllCurrentFactors(dbClient);
    mfController.setFactors(factorsFromDB);

    // set locked accounts
    await lockedAccountsController.synchronizeDbToConfig(dbClient);
    await lockedAccountsController.setLockedAccounts(dbClient);

    // start scheduler
    scheduleController.run(dbClient);

    function isLockedAccount(account) {
        return lockedAccountsController.isLockedAccount(account);
    }

    function formatTime(time) {
        return time.replace("T", " ").substring(0, time.length - 6);
    }

    function hasResponse(doc, value) {
        if (doc.hasOwnProperty('response') && doc.response !== null) { return doc.response[value]; }
        return '';
    }

    function strong(value) {
        return "<strong>" + value + "</strong>";
    }

    app.post("/lock/:account/", function(req, res) {
        var account = Number(req.params.account);

        lockedAccountsController.lock(dbClient, account);

        res.render("index");
    });

    app.post("/unlock/:account/", function(req, res) {
        var account = Number(req.params.account);

        lockedAccountsController.unlock(dbClient, account);

        res.render("index");
    });

    app.post("/close/:account/:symbol", function(req, res) {

        var account = Number(req.params.account);
        var name = req.params.symbol;

        closeTradeController.close(dbClient, account, name);

        res.render("index");
    });

    app.post("/multiple-factor/:key/:value", function(req, res) {

        var key = req.params.key;
        var value = Number(req.params.value);

        mfController.createOrUpdate(dbClient, key, value);

        res.render("index");
    });

    app.get("/display-exceptions", async function(req, res) {  
        const results = await errorsModel.find(dbClient);

        let output = "";
        let count = 1;
        await results.forEach(doc => {
            output += 
            strong(count++) 
            + " " + formatTime(doc.time) 
            + " " + strong(doc.strategyId)
            + " " + doc.account
            + " " + strong(doc. symbol)
            + " " + doc.description
            + " " + "status: " + strong(hasResponse(doc, 'status'))
            + " " + hasResponse(doc, 'errorCode')
            + " " + strong(hasResponse(doc, 'errorDescr'))
            + "<br>"
        });

        res.render("factors", { output });
    });

    app.get("/display-schedules", async function(req, res) {  
        const results = await schEventsModel.find(dbClient);

        let output = "";
        let count = 1;
        await results.forEach(doc => {
            output += 
            strong(count++) 
            + " " + formatTime(doc.time) 
            + " " + strong(doc.comand)
            + " " + doc.account
            + " " + strong(doc. symbol)
            + "<br>"
        });

        res.render("factors", { output });
    });

    app.get("/display-trades-by-position/:strategy/:symbol/:account", async function(req, res) {  
        var strategy = req.params.strategy;
        var symbol = req.params.symbol;
        var account = Number(req.params.account);

        const results = await mfTradesModel.find(dbClient, strategy, symbol, account);

        let output = "";
        let color = "";
        await results.forEach(trade => {
            if (trade.type === "buy") { color = "green"; }
            if (trade.type === "sell") { color = "red"; }
            if (trade.type === "closeSell") { color = "brown"; }
            if (trade.type === "closeBuy") { color = "#013220"; }
            output += " " + formatTime(trade.time) + " <i style='color:" + color + ";'>" + trade.type + "</i><br>";
        });

        res.render("factors", { output });
    });

    app.get("/display-factors-by-position/:strategy/:symbol/:account", async function(req, res) {  
        var strategy = req.params.strategy;
        var symbol = req.params.symbol;
        var account = Number(req.params.account);

        let id = strategy + "-" + symbol + "-" + account;

        const strategyConf = conf.strategies.find(s => s.id == strategy);
        const results = await mfParametersModel.findById(dbClient, id);

        const outputClearLink = "<a href='http://" + req.headers.host 
            + "/delete-factors/" + strategy + "/" + symbol + "/" + account + "'>clear</a>";

        let output = "<strong>" + id + "</strong><br>"
        + outputClearLink + "<br>"
        + "BUY: " + JSON.stringify(strategyConf.buy)  + "<br>"
        + "CLOSE BUY: " + JSON.stringify(strategyConf.closeBuy) + "<br>"
        + "SELL: " + JSON.stringify(strategyConf.sell) + "<br>"
        + "CLOSE SELL: " + JSON.stringify(strategyConf.closeSell) + "<br><br>";    

        let lineCount = 1;
        results.values.forEach(value => {
            output += lineCount++ +" " + formatTime(value.time);
            let count = value.parameters.length; 

            value.parameters.forEach(par => {
                count = count + par.value;
                output += " " + par.key + " " + par.value + " ";
            })

            if (utilities.isMatchAND(strategyConf.buy, value.parameters)) {
                output += "<i style='color:green;font-weight:bold;'> BUY </i>"
            }

            if (utilities.isMatchAND(strategyConf.sell, value.parameters)) {
                output += "<i style='color:red;font-weight:bold;'> SELL </i>"
            }

            if (utilities.isMatchOR(strategyConf.closeBuy, value.parameters)) {
                output += "<i style='color:#013220'> close buy </i>"
            }

            if (utilities.isMatchOR(strategyConf.closeSell, value.parameters)) {
                output += "<i style='color:brown;'> close sell </i>"
            }
            
            output += "<br>";
        });

        res.render("factors", { output });
    });

    app.get("/display-factors", async function(req, res) {  
        const lockedAccounts = lockedAccountsController.getLockedAccounts();
        const outputLockedAccounts = "<div><strong>Locked accounts: " + lockedAccounts + "</strong></div>"
            + "<br>"
            + "curl -X POST " + "http://" + req.headers.host + "/lock/1<br>"
            + "curl -X POST " + "http://" + req.headers.host + "/unlock/1<br>"
            + "<br>";

            const outputLinkToExceptions = "<div><a href='http://" + req.headers.host 
            + "/display-exceptions' target='_blank'>Exceptions</a></div>";

            const outputLinkToScheduledEvents = "<div><a href='http://" + req.headers.host 
                + "/display-schedules' target='_blank'>Scheduled tasks</a></div>";
        
        // output positions (from DB)
        let countPositions = 1;
        let outputPositions = "<div><ul>";

        const results = await mfParametersModel.findAll(dbClient);
        await results.forEach(doc => {
            let par = doc._id.split("-");
            outputPositions = outputPositions + "<li>" + countPositions++ + " " 
                + doc._id + " " 
                + "<a target='_blank' href='http://" + req.headers.host + 
                    "/display-factors-by-position/" + par[0] + "/" + par[1] + "/" + par[2] +"'> Factors </a> "
                + "<a target='_blank' href='http://" + req.headers.host + 
                    "/display-trades-by-position/" + par[0] + "/" + par[1] + "/" + par[2] +"'> Trades </a>"
        });

        outputPositions = outputPositions + "</ul></div>"

        // output factors (from memory)
        var factors = mfController.getFactors();

        let output = "<div><ul>";
        let count = 1;

        for (let [key, value] of factors) {
            output = output + "<li>" + count++  + " " + key + ' => ' + value + "</li>";
        }

        output = output + "</ul></div>";

        for (let [key, value] of factors) {
            output = output + "curl -X POST " + "http://" + req.headers.host + "/multiple-factor/"
            + key + "/" + value
            + "<br>";
        }

        output = outputLinkToExceptions + outputLinkToScheduledEvents + outputLockedAccounts + outputPositions + output;
        res.render("factors", { output });
    });

    app.post("/:account/:action", function(req, res) {

        var account = Number(req.params.account);
        var action = req.params.action;

        // lock account 
        if (!isLockedAccount(account)) {
            multipleTradeController.trade(dbClient, account, action);
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
            singleTradeController.trade(dbClient, account, sl, tp, offset, action, symbol, volume);
        }

        res.render("index");
    });

    app.get("/delete-factors/:strategy/:symbol/:account", async function(req, res) {  
        var strategy = req.params.strategy;
        var symbol = req.params.symbol;
        var account = Number(req.params.account);

        const id = strategy + "-" + symbol + "-" + account;

        function arrayToMap(arr) {
            let arrAsMap = new Map();
            arr.forEach(par => {
                arrAsMap.set(par.key, par.value);
            });
            return arrAsMap;
        }

        // get one line parameters
        const factors = await mfParametersModel.findById(dbClient, id);
        const factorsAsMap = arrayToMap(factors.values[0].parameters);

        // delete listing
        await mfParametersModel.deleteById(dbClient, id);

        // insert one line parameters
        await mfParametersModel.upsertParameters(dbClient, strategy, symbol, account, factorsAsMap);

        res.redirect("/display-factors-by-position/" + strategy + "/" + symbol + "/" + account);
    });
    
}}
