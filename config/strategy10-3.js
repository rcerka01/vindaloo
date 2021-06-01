module.exports = {
    id: 103,
    name: "15 MIN RSI AGAINST TREND",
    disableParameterCheck: true,
    parameterCount: 6,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1300
        },
        {
            symbol: "NZDUSD",
            account: 1301
        },
        {
            symbol: "USDCHF",
            account: 1302
        },
        {
            symbol: "USDCAD",
            account: 1303
        },
        {
            symbol: "EURUSD",
            account: 1304
        },
        {
            symbol: "GBPUSD",
            account: 1305
        },
        {
            symbol: "USDJPY",
            account: 1306
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
            value: -1
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
            value: 1
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
