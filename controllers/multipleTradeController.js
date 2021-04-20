const conf = require("../config/config");
const singleTradeController = require("./singleTradeController");
const closeTradeController = require("./closeTradeController");  
const lockedAccountsController = require("./lockedAccountsController");     

function isLockedAccount(account) {
    return lockedAccountsController.isLockedAccount(account);
}

module.exports = { 
    trade: function (dbClient, account, action) {
        let multiple = conf.multiples.find(m => Number(m.id) === account);

        multiple.accounts.map(a => {
            if (!isLockedAccount(a.id)) {
                singleTradeController.trade(dbClient, a.id, a.sl, a.tp, a.offset, action, a.symbol, a.volume);
            }
        });
    },
    close: function (dbClient, account, direction) {
        let multiple = conf.multiples.find(m => Number(m.id) === account);

        multiple.accounts.map(a => {
            closeTradeController.close(dbClient, a.id, a.symbol, direction);
        });
    }
}
