const mfTradeController = require("./mfTradeController");    

let factors = new Map();

module.exports = { 
    createOrUpdate: (key, value) => {
        factors.set(key, value);
        mfTradeController.runMultipleFactorTrade(factors, key);
    },
    getFactors: () => { return factors; }
}
