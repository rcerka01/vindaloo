const conf = require("../config/config");
const schedule = require('node-schedule');
const lockedAccountsController = require("./lockedAccountsController");
const multipleTradeController = require("./multipleTradeController");
const closeTradeController = require("./closeTradeController");
const schEventsModel = require("../models/SchEvents");
const mfController = require("./mfController"); 

function setFactor(dbClient,factor, value) {
    mfController.createOrUpdate(dbClient, factor, value)
}

function getFactor(key) {
    const factors = mfController.getFactors();
    return factors.get(key);
}

function SPECFORSTRATEGY9(dbClient, symbol) {
    if (getFactor(symbol + "-9_blockedDESCRIPTIVE") > 0) {
        setFactor(symbol + "-9_sale", -1)
        setFactor(dbClient, symbol + "-9_buy", -1)
    }
    setFactor(dbClient, symbol + "-9_blockedDESCRIPTIVE", -1);
}

async function stringToComand(dbClient, str, account, symbol) {
    if (str === "closeTrades") {
        if (account > 99 ) {
            multipleTradeController.close(dbClient, account);
        } else {
            closeTradeController.close(dbClient, account, symbol);
        }
        await schEventsModel.insertEvent(dbClient, str, account, symbol);
    }

    if (str === "addToLockedAccounts") {
        await lockedAccountsController.lock(dbClient, account);
        await schEventsModel.insertEvent(dbClient, str, account, symbol);
    }

    if (str === "removeFromLockedAccounts") {
        await lockedAccountsController.unlock(dbClient, account);
        await schEventsModel.insertEvent(dbClient, str, account, symbol);
    }
    
    if (str === "setBlockedParameter") {
        SPECFORSTRATEGY9(dbClient, "AUDUSD");
        SPECFORSTRATEGY9(dbClient, "NZDUSD");
        SPECFORSTRATEGY9(dbClient, "USDCHF");
        SPECFORSTRATEGY9(dbClient, "USDCAD");
        SPECFORSTRATEGY9(dbClient, "EURUSD");
        SPECFORSTRATEGY9(dbClient, "GBPUSD");
        SPECFORSTRATEGY9(dbClient, "USDJPY");
        SPECFORSTRATEGY9(dbClient, "EURCHF");
        SPECFORSTRATEGY9(dbClient, "EURGBP");
        SPECFORSTRATEGY9(dbClient, "EURJPY");
        SPECFORSTRATEGY9(dbClient, "GBPCHF");
        SPECFORSTRATEGY9(dbClient, "GBPJPY");
    }

    if (str === "test") {}
}

function run(dbClient) {
    conf.schedules.forEach(sch => {
        sch.accounts.forEach( acc => {
            sch.symbols.forEach( symb => {
                sch.actions.forEach( act => {
                    schedule.scheduleJob(sch.cron, function() {
                        stringToComand(dbClient, act, acc, symb)
                    });
                });
            });
        });
    });
}

module.exports = { 
    run: run
}
