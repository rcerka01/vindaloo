module.exports = {
    id: 0004,
    name: "1 MIN HMA, CLOSE AT MIDDLE",
    parameterCount: 3,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 500
        },
        {
            symbol: "NZDUSD",
            account: 501
        },
        {
            symbol: "USDCHF",
            account: 502
        },
        {
            symbol: "USDCAD",
            account: 503
        },
        {
            symbol: "EURUSD",
            account: 504
        },
        {
            symbol: "GBPUSD",
            account: 505
        },
        {
            symbol: "USDJPY",
            account: 506
        }
    ],
    // and
    buy: [
        {
            key: "beloweLowerThershold",
            value: -1
        },
        {
            key: "positive",
            value: -1
        }
    ],
    // or
    closeBuy: [
        {
            key: "positive",
            value: 1
        }
    ],
    // and
    sell: [
        {
            key: "aboveUpperThershold",
            value: 1
        },
        {
            key: "positive",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "positive",
            value: -1
        }
    ]
}
