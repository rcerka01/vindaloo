module.exports = {
    id: 9,
    name: "ABOVE, BELOW 100 HMA",
    disableParameterCheck: false,
    parameterCount: 3,
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
            key: "blockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "buy",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "buy",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "blockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "sell",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "sell",
            value: -1
        }
    ]
}
