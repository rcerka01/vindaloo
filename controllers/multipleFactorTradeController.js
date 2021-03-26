const conf = require("../config/config");
const multipleTradeController = require("./multipleTradeController");     
const closeTradeController = require("./closeTradeController");     


function isLockedAccount(account) {
    return conf.lockedAccounts.includes(account);
}

function isParametersSet(factors) {
    if (
        factors.has("crud_oil-5m-MA") &&
        factors.has("crud_oil-5m-signal") &&
        factors.has("crud_oil-5m-macd") &&
        factors.has("crud_oil-5m-histogram")
    ) { return true; }

    return false
}

function isOpenBuyTrade(factors) {
    if (
        factors.get("crud_oil-5m-MA") > 0 &&
        factors.get("crud_oil-5m-signal") > 0 &&
        factors.get("crud_oil-5m-macd") > 0 &&
        factors.get("crud_oil-5m-histogram") > 0 
    ) { return true; }

    return false
}

function isOpenSellTrade(factors) {
    if (
        factors.get("crud_oil-5m-MA") < 0 &&
        factors.get("crud_oil-5m-signal") < 0 &&
        factors.get("crud_oil-5m-macd") < 0 &&
        factors.get("crud_oil-5m-histogram") < 0 
    ) { return true; }

    return false
}

function runMultipleFactorTrade(factors) {

    const account = 777;
    const symbol = "DE30";
    const buy = "buy";
    const sell = "sell";

    if (isParametersSet(factors)) {

        if (isOpenBuyTrade(factors)) {
            if (!isLockedAccount(account)) {
                multipleTradeController.trade(account, buy);
            }

        } else if (isOpenSellTrade(factors)) {
            if (!isLockedAccount(account)) {
                multipleTradeController.trade(account, sell);
            }

        } else {
            multipleTradeController.close(account, symbol);
        }

    }

    for (let [key, value] of factors) {
        console.log("multiple trade run " + key + ' => ' + value);
    }
}

module.exports = { 
    runMultipleFactorTrade: runMultipleFactorTrade
}
