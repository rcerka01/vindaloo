const conf = require("../config/config");
const singleTradeController = require("./singleTradeController");
const closeTradeController = require("./closeTradeController");     

function isLockedAccount(account) {
    return conf.lockedAccounts.includes(account);
}

module.exports = { 
    trade: function (account, action) {
        let multiple = conf.multiples.find(m => Number(m.id) === account);

        multiple.accounts.map(a => {
            if (!isLockedAccount(a.id)) {
                singleTradeController.trade(a.id, a.sl, a.tp, a.offset, action, a.symbol, a.volume);
            }
        });
    },
    close: function (account, direction) {
        let multiple = conf.multiples.find(m => Number(m.id) === account);

        multiple.accounts.map(a => {
            closeTradeController.close(a.id, a.symbol, direction);
        });
    }
}
