const conf = require("../config/config");
const schedule = require('node-schedule');
const lockedAccountsController = require("./lockedAccountsController");
const multipleTradeController = require("./multipleTradeController");
const closeTradeController = require("./closeTradeController");
const schEventsModel = require("../models/SchEvents");

async function stringToComand(dbClient, str, account, symbol) {
    if (str === "closeTrades") {
        //todo close trades contr -> acetion
        //tesst if close sell and buy
        if (account > 99 ) {
            multipleTradeController.close(dbClient, account);
        } else {
            closeTradeController.close(dbClient, account, symbol);
        }
        await schEventsModel.insertEvent(dbClient, str, account, symbol);
        console.log('invoked closeTrades ' + account + " " + symbol)
    }

    if (str === "addToLockedAccounts") {
        //todo close trades contr -> acetion    
        await lockedAccountsController.lock(dbClient, account);
        await schEventsModel.insertEvent(dbClient, str, account, symbol);
        console.log('invoked addToLockedAccounts ' + account + " " + symbol)
    }

    if (str === "removeFromLockedAccounts") {
        //todo close trades contr -> acetion  
        await lockedAccountsController.unlock(dbClient, account);
        await schEventsModel.insertEvent(dbClient, str, account, symbol);
        console.log('invoked removeFromLockedAccounts ' + account + " " + symbol)    
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
