module.exports = {
    id: 12,
    name: "45 MIN RSI NOT DEPENDANT ON TREND",
    disableParameterCheck: true,
    parameterCount: 4,
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
            key: "45lowerblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "45lowerstart",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "45lowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "45upperblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "45upperstart",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "45upperstart",
            value: -1
        }
    ]
}

