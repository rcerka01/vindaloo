module.exports = {
    id: 103,
    name: "15 MIN RSI AGAINST TREND",
    disableParameterCheck: true,
    parameterCount: 6,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1030
        },
        {
            symbol: "NZDUSD",
            account: 1031
        },
        {
            symbol: "USDCHF",
            account: 1032
        },
        {
            symbol: "USDCAD",
            account: 1033
        },
        {
            symbol: "EURUSD",
            account: 1034
        },
        {
            symbol: "GBPUSD",
            account: 1035
        },
        {
            symbol: "USDJPY",
            account: 1036
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
