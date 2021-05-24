module.exports = {
    id: 0006,
    name: "1 MIN RSI",
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 800
        },
        {
            symbol: "NZDUSD",
            account: 801
        },
        {
            symbol: "USDCHF",
            account: 802
        },
        {
            symbol: "USDCAD",
            account: 803
        },
        {
            symbol: "EURUSD",
            account: 804
        },
        {
            symbol: "GBPUSD",
            account: 805
        },
        {
            symbol: "USDJPY",
            account: 806
        }
    ],
    // and
    buy: [
        {
            key: "lowerblocked",
            value: -1
        },
        {
            key: "lowerstart",
            value: 1
        },
        {
            key: "ema",
            value: 1
        },
    ],
    // or
    closeBuy: [],
    // and
    sell: [
        {
            key: "upperblock",
            value: -1
        },
        {
            key: "upperstart",
            value: 1
        },
        {
            key: "ema",
            value: -1
        }
    ],
    // or
    closeSell: []
}
