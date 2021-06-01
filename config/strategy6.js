module.exports = {
    id: 6,
    name: "1 min, close at 'threshold above middle'",
    disableParameterCheck: false,
    parameterCount: 3,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 600
        },
        {
            symbol: "NZDUSD",
            account: 601
        },
        {
            symbol: "USDCHF",
            account: 602
        },
        {
            symbol: "USDCAD",
            account: 603
        },
        {
            symbol: "EURUSD",
            account: 604
        },
        {
            symbol: "GBPUSD",
            account: 505
        },
        {
            symbol: "USDJPY",
            account: 606
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
            key: "high",
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
