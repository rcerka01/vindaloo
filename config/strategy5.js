module.exports = {
    id: 5,
    name: "1H RSI",
    disableParameterCheck: false,
    parameterCount: 2,
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
        },
        {
            symbol: "EURCHF",
            account: 507
        },
        {
            symbol: "EURGBP",
            account: 508
        },
        {
            symbol: "EURJPY",
            account: 509
        },
        {
            symbol: "GBPCHF",
            account: 510
        },
        {
            symbol: "GBPJPY",
            account: 511
        }
    ],
    // and
    buy: [
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
