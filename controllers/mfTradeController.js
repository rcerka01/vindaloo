const conf = require("../config/config");
const utilities = require("./utilities");
const mfParametersModel = require("../models/MfParameters");
const mfTradesModel = require("../models/MfTrades");
const multipleTradeController = require("./multipleTradeController");
const lockedAccountsController = require("./lockedAccountsController");     

function isLockedAccount(account) {
    return lockedAccountsController.isLockedAccount(account);
}

function getSymbolAndStrategyId(key) {
    const arr = key.split("_");
    const symbolAndStrategyIdArr = arr[0].split("-");
    const symbol = symbolAndStrategyIdArr[0];
    const strategyId = symbolAndStrategyIdArr[1];

    return {
        symbol: symbol,
        strategyId: strategyId
    }
}

function getFactorsDefinedBySymbolAndStrategyId(factors, symbol, strategyId) {
    let factorsBySymbolAndStrategyId = new Map();

    for (let [key, value] of factors) {
        const ssid = getSymbolAndStrategyId(key)
        if (ssid.symbol == symbol && ssid.strategyId == strategyId) {
            const keyParameter = key.split("_")[1];
            factorsBySymbolAndStrategyId.set(keyParameter, value);
        }
    }

    return factorsBySymbolAndStrategyId;
}

function getStrategy(id) {
    return conf.strategies.find(s => s.id == id);
}

function getAccount(strategy, symbol) {
    return strategy.bind.find(data => data.symbol === symbol).account;
}

function isAllParametersPresent(factors, strategy) {
    function loopParameters(parameters) {
        for (i in parameters) {
           if (!factors.has(parameters[i].key)) return false;
        }
        return true;
    }
    
    if (strategy.disableParameterCheck) { return true; }

    if (strategy.parameterCount === factors.size) {
        if (
            loopParameters(strategy.buy) &&
            loopParameters(strategy.closeBuy) &&
            loopParameters(strategy.sell) &&
            loopParameters(strategy.closeSell)
        ) return true;
    }

    return false;
}

function startTrade(dbClient, strategy, symbol, definedFactors, runFlag, descriptiveOnlyFlag) {
    const account = getAccount(strategy, symbol);

    // not start trade if parameters are missing, or parameter is only descriptive
    if (runFlag && !descriptiveOnlyFlag) {
        const startBuy = utilities.isMatchAND(strategy.buy, utilities.mapToArray(definedFactors))
        const startSell = utilities.isMatchAND(strategy.sell, utilities.mapToArray(definedFactors))
        const closeBuy = utilities.isMatchOR(strategy.closeBuy, utilities.mapToArray(definedFactors))
        const closeSell = utilities.isMatchOR(strategy.closeSell, utilities.mapToArray(definedFactors))

        if (startBuy) {
            if (!isLockedAccount(account)) {
                multipleTradeController.trade(dbClient, account, "buy");
                mfTradesModel.insertTrade(dbClient, strategy.id, symbol, account, "buy")
            }
        }
        if (startSell) {
            if (!isLockedAccount(account)) {
                multipleTradeController.trade(dbClient, account, "sell");
                mfTradesModel.insertTrade(dbClient, strategy.id, symbol, account, "sell")
            }
        }
        if (closeBuy) {
            if (!isLockedAccount(account)) {
                multipleTradeController.close(dbClient, account, "buy");
                mfTradesModel.insertTrade(dbClient, strategy.id, symbol, account, "closeBuy")
            }
        }        
        if (closeSell) {
            if (!isLockedAccount(account)) {
                multipleTradeController.close(dbClient, account, "sell");
                mfTradesModel.insertTrade(dbClient, strategy.id, symbol, account, "closeSell")
            }
        }
    }
}

function runMultipleFactorTrade(dbClient, factors, key) {

    const descriptiveOnlyFlag = key.includes('DESCRIPTIVE');

    const symbolAndStrategyId = getSymbolAndStrategyId(key);

    const symbol = symbolAndStrategyId.symbol;
    const strategyId = symbolAndStrategyId.strategyId;

    const definedFactors = getFactorsDefinedBySymbolAndStrategyId(factors, symbol, strategyId);

    const strategy = getStrategy(strategyId); 
    let runFlag = isAllParametersPresent(definedFactors, strategy);

    // start trade for strategy
    startTrade(dbClient, strategy, symbol, definedFactors, runFlag, descriptiveOnlyFlag)

    // start trades for sub-strategie
    strategy.subStrategies.map(id => {
        startTrade(dbClient, getStrategy(id), symbol, definedFactors, runFlag, descriptiveOnlyFlag);
    });

    // save factors in DB, also descriptive only (ones which shall not start the trade)
    // save only when all parameters present in memory
    if (runFlag) {
        const account = getAccount(strategy, symbol);
        mfParametersModel.upsertParameters(dbClient, strategyId, symbol, account, definedFactors);
    }
}

module.exports = { 
    runMultipleFactorTrade: runMultipleFactorTrade
}
