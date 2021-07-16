module.exports = {
    id: 8,
    name: "1H RSI 55 SELL",
    disableParameterCheck: false,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 800
        },
        {
            symbol: "NZDUSD",
            account: 801
        },
        {
            symbol: "USDCHF",
            account: 802
        },
        {
            symbol: "USDCAD",
            account: 803
        },
        {
            symbol: "EURUSD",
            account: 804
        },
        {
            symbol: "GBPUSD",
            account: 805
        },
        {
            symbol: "USDJPY",
            account: 806
        },
        {
            symbol: "EURCHF",
            account: 807
        },
        {
            symbol: "EURGBP",
            account: 808
        },
        {
            symbol: "EURJPY",
            account: 809
        },
        {
            symbol: "GBPCHF",
            account: 810
        },
        {
            symbol: "GBPJPY",
            account: 811
        }
    ],
    // and
    buy: [
        {
            key: "1Hlowerstart",
            value: 1
        },
        {
            key: "1Hupperstart55",
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
            key: "1Hupperstart55",
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
            key: "1Hupperstart55",
            value: -1
        }
    ]
}
