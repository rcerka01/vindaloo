module.exports = {
    id: 7,
    name: "HMA, 1 min, close at 'threshold above middle', against trend",
    disableParameterCheck: false,
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 700
        },
        {
            symbol: "NZDUSD",
            account: 701
        },
        {
            symbol: "USDCHF",
            account: 702
        },
        {
            symbol: "USDCAD",
            account: 703
        },
        {
            symbol: "EURUSD",
            account: 704
        },
        {
            symbol: "GBPUSD",
            account: 705
        },
        {
            symbol: "USDJPY",
            account: 706
        }
    ],
    // and
    buy: [
        {
            key: "low",
            value: -1
        },
        {
            key: "positive",
            value: -1
        },
        {
            key: "trend",
            value: 1
        },
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
            key: "high",
            value: 1
        },
        {
            key: "positive",
            value: 1
        },
        {
            key: "trend",
            value: -1
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
