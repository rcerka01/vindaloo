module.exports = {
    id: 102,
    name: "15 MIN RSI FOLLOW TREND",
    disableParameterCheck: true,
    parameterCount: 6,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1020
        },
        {
            symbol: "NZDUSD",
            account: 1021
        },
        {
            symbol: "USDCHF",
            account: 1022
        },
        {
            symbol: "USDCAD",
            account: 1023
        },
        {
            symbol: "EURUSD",
            account: 1024
        },
        {
            symbol: "GBPUSD",
            account: 1025
        },
        {
            symbol: "USDJPY",
            account: 1026
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
