const conf = require("../config/config");
const schedule = require('node-schedule');
const lockedAccountsController = require("./lockedAccountsController");
const multipleTradeController = require("./multipleTradeController");
const closeTradeController = require("./closeTradeController");
const schEventsModel = require("../models/SchEvents");

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
