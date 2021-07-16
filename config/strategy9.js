module.exports = {
    id: 9,
    name: "1H RSI 50 SELL",
    disableParameterCheck: false,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 900
        },
        {
            symbol: "NZDUSD",
            account: 901
        },
        {
            symbol: "USDCHF",
            account: 902
        },
        {
            symbol: "USDCAD",
            account: 903
        },
        {
            symbol: "EURUSD",
            account: 904
        },
        {
            symbol: "GBPUSD",
            account: 905
        },
        {
            symbol: "USDJPY",
            account: 906
        },
        {
            symbol: "EURCHF",
            account: 907
        },
        {
            symbol: "EURGBP",
            account: 908
        },
        {
            symbol: "EURJPY",
            account: 909
        },
        {
            symbol: "GBPCHF",
            account: 910
        },
        {
            symbol: "GBPJPY",
            account: 911
        }
    ],
    // and
    buy: [
        {
            key: "1Hlowerstart",
            value: 1
        },
        {
            key: "1Hupperstart50",
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
            key: "1Hupperstart50",
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
            key: "1Hupperstart50",
            value: -1
        }
    ]
}
