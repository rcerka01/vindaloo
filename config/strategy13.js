module.exports = {
    id: 13,
    name: "1H RSI 50 SELL / BUY, UNLY BETWEEN 47 - 53",
    disableParameterCheck: false,
    parameterCount: 2,
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
        },
        {
            symbol: "EURCHF",
            account: 1307
        },
        {
            symbol: "EURGBP",
            account: 1308
        },
        {
            symbol: "EURJPY",
            account: 1309
        },
        {
            symbol: "GBPCHF",
            account: 1310
        },
        {
            symbol: "GBPJPY",
            account: 1311
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
