module.exports = {
    id: 11,
    name: "30 MIN RSI NOT DEPENDANT ON TREND",
    disableParameterCheck: true,
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1100
        },
        {
            symbol: "NZDUSD",
            account: 1101
        },
        {
            symbol: "USDCHF",
            account: 1102
        },
        {
            symbol: "USDCAD",
            account: 1103
        },
        {
            symbol: "EURUSD",
            account: 1104
        },
        {
            symbol: "GBPUSD",
            account: 1105
        },
        {
            symbol: "USDJPY",
            account: 1106
        }
    ],
    // and
    buy: [
        {
            key: "30lowerblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "30lowerstart",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "30lowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "30upperblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "30upperstart",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "30upperstart",
            value: -1
        }
    ]
}

