module.exports = {
    id: 4,
    name: "1H RSI, 4h trend related",
    disableParameterCheck: false,
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 400
        },
        {
            symbol: "NZDUSD",
            account: 401
        },
        {
            symbol: "USDCHF",
            account: 402
        },
        {
            symbol: "USDCAD",
            account: 403
        },
        {
            symbol: "EURUSD",
            account: 404
        },
        {
            symbol: "GBPUSD",
            account: 405
        },
        {
            symbol: "USDJPY",
            account: 406
        },
        {
            symbol: "EURCHF",
            account: 407
        },
        {
            symbol: "EURGBP",
            account: 408
        },
        {
            symbol: "EURJPY",
            account: 409
        },
        {
            symbol: "GBPCHF",
            account: 410
        },
        {
            symbol: "GBPJPY",
            account: 411
        }
    ],
    // and
    buy: [
        {
            key: "4HdowntrendDESCRIPTIVE",
            value: -1
        },
        {
            key: "1Hlowerstart",
            value: 1
        },
        {
            key: "1Hupperstart",
            value: -1
        }
    ],
    // or
    closeBuy: [
        {
            key: "1Hlowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "4HuptrendDESCRIPTIVE",
            value: -1
        },
        {
            key: "1Hupperstart",
            value: 1
        },
        {
            key: "1Hlowerstart",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "1Hupperstart",
            value: -1
        }
    ]
}
