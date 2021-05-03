const mfTradeController = require("./mfTradeController");  

let factors = new Map();

module.exports = { 
    createOrUpdate: (dbClient, key, value) => {
        if (factors.get(key) != value) {
            factors.set(key, value);
            mfTradeController.runMultipleFactorTrade(dbClient, factors, key);
        }
    },
    getFactors: () => { return factors; },
    setFactors: (f) => { factors = f; }
}
