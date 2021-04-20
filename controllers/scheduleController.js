const conf = require("../config/config");
const schedule = require('node-schedule');
const lockedAccountsController = require("./lockedAccountsController");
const multipleTradeController = require("./multipleTradeController");

function stringToComand(dbClient, str, account, symbol) {
    if (str === "closeTrades") {
        //todo close trades contr -> acetion
        // tesst if close sell and buy
        // multipleTradeController.close(dbClient, account);
        console.log('invoked stringToComand ' + account + " " + symbol)
    }
    if (str === "addToLockedAccounts") {
        //todo close trades contr -> acetion    
        //lockedAccountsController.lock(dbClient, account);
        console.log('invoked addToLockedAccounts ' + account + " " + symbol)
    }
    if (str === "removeFromLockedAccounts") {
        //todo close trades contr -> acetion  
        //lockedAccountsController.unlock(dbClient, account);
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
