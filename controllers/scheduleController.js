const conf = require("../config/config");
const schedule = require('node-schedule');
const lockedAccountsController = require("./lockedAccountsController");
const multipleTradeController = require("./multipleTradeController");
const closeTradeController = require("./closeTradeController");
const schEventsModel = require("../models/SchEvents");
const mfController = require("./mfController");     

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
        mfController.createOrUpdate(dbClient, "AUDUSD-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "NZDUSD-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "USDCHF-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "USDCAD-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "EURUSD-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "GBPUSD-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "USDJPY-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "EURCHF-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "EURGBP-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "EURJPY-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "GBPCHF-9_blockedDESCRIPTIVE", -1);
        mfController.createOrUpdate(dbClient, "GBPJPY-9_blockedDESCRIPTIVE", -1);
    }
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
