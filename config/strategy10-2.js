module.exports = {
    id: 102,
    name: "15 MIN RSI FOLLOW TREND",
    disableParameterCheck: true,
    parameterCount: 6,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1200
        },
        {
            symbol: "NZDUSD",
            account: 1201
        },
        {
            symbol: "USDCHF",
            account: 1202
        },
        {
            symbol: "USDCAD",
            account: 1203
        },
        {
            symbol: "EURUSD",
            account: 1204
        },
        {
            symbol: "GBPUSD",
            account: 1205
        },
        {
            symbol: "USDJPY",
            account: 1206
        }
    ],
    // and
    buy: [
        {
            key: "15lowerblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "15lowerstart",
            value: 1
        },
        {
            key: "15trend",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "15lowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "15upperblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "15upperstart",
            value: 1
        },
        {
            key: "15trend",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "15upperstart",
            value: -1
        }
    ]
}
