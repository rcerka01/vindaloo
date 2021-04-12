const conf = require("../config/config");
const mfParametersModel = require("../models/MfParameters");
const multipleTradeController = require("./multipleTradeController");     

function isLockedAccount(account) {
    return conf.lockedAccounts.includes(account);
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

function buyOrSell(configParameters, factors) {
    for (i in configParameters) {
        let configKey = configParameters[i].key;
        let configValue = configParameters[i].value;
        let currentValue = factors.get(configKey);
        if (currentValue !== configValue) { return false; }       
    }

    return true;
}

function closeBuyOrSell(configParameters, factors) {
    for (i in configParameters) {
        let configKey = configParameters[i].key;
        let configValue = configParameters[i].value;
        let currentValue = factors.get(configKey);
        if (currentValue === configValue) { return true; }       
    }

    return false;
}

function runMultipleFactorTrade(factors, key) {

    const symbolAndStrategyId = getSymbolAndStrategyId(key);

    const symbol = symbolAndStrategyId.symbol;
    const strategyId = symbolAndStrategyId.strategyId;

    const definedFactors = getFactorsDefinedBySymbolAndStrategyId(factors, symbol, strategyId);

    const strategy = getStrategy(strategyId); 

    const account = getAccount(strategy, symbol);

    let run = isAllParametersPresent(definedFactors, strategy);

    if (run) {

        if (buyOrSell(strategy.buy, definedFactors)) {
            if (!isLockedAccount(account)) {
                multipleTradeController.trade(account, "buy");
            }
        }
        if (buyOrSell(strategy.sell, definedFactors)) {
            if (!isLockedAccount(account)) {
                multipleTradeController.trade(account, "sell");
            }
        }
        if (closeBuyOrSell(strategy.closeBuy, definedFactors)) {
            if (!isLockedAccount(account)) {
                multipleTradeController.close(account, "buy");
            }
        }        
        if (closeBuyOrSell(strategy.closeSell, definedFactors)) {
            if (!isLockedAccount(account)) {
                multipleTradeController.close(account, "sell");
            }
        }
    }

    // save factors in DB
    mfParametersModel.upsertParameters(strategyId, symbol, account, definedFactors);
}

module.exports = { 
    runMultipleFactorTrade: runMultipleFactorTrade
}
