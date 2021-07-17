module.exports = {
    id: 14,
    name: "MAGIC",
    disableParameterCheck: false,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1400
        },
        {
            symbol: "NZDUSD",
            account: 1401
        },
        {
            symbol: "USDCHF",
            account: 1402
        },
        {
            symbol: "USDCAD",
            account: 1403
        },
        {
            symbol: "EURUSD",
            account: 1404
        },
        {
            symbol: "GBPUSD",
            account: 1405
        },
        {
            symbol: "USDJPY",
            account: 1406
        },
        {
            symbol: "EURCHF",
            account: 1407
        },
        {
            symbol: "EURGBP",
            account: 1408
        },
        {
            symbol: "EURJPY",
            account: 1409
        },
        {
            symbol: "GBPCHF",
            account: 1410
        },
        {
            symbol: "GBPJPY",
            account: 1411
        }
    ],
    // and
    buy: [
        {
            key: "1Hlowerstart50",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "1Hlowerstart50",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "1Hupperstart50",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "1Hupperstart50",
            value: -1
        }
    ]
}
