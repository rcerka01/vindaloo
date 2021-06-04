module.exports = {
    id: 5,
    name: "1 min, HMA CD, with trend",
    disableParameterCheck: false,
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
            key: "low",
            value: -1
        },
        {
            key: "trend",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "high",
            value: 1
        },
        {
            key: "trend",
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
            key: "trend",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "low",
            value: -1
        },
        {
            key: "trend",
            value: -1
        }
    ]
}
