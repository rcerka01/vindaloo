const multipleFactorTradeController = require("./multipleFactorTradeController");    

let factors = new Map();

module.exports = { 
    createOrUpdate: (key, value) => {
        factors.set(key, value);
        multipleFactorTradeController.runMultipleFactorTrade(factors);
    },
    getFactors: () => { return factors; }
}
