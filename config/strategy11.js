module.exports = {
    id: 11,
    name: "1H RSI 50 SELL / BUY",
    disableParameterCheck: false,
    parameterCount: 2,
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
        },
        {
            symbol: "EURCHF",
            account: 1107
        },
        {
            symbol: "EURGBP",
            account: 1108
        },
        {
            symbol: "EURJPY",
            account: 1109
        },
        {
            symbol: "GBPCHF",
            account: 1110
        },
        {
            symbol: "GBPJPY",
            account: 1111
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
            key: "1Hupperstart50",
            value: 1
        },
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
        },
        {
            key: "1Hlowerstart50",
            value: 1
        }
    ]
}
