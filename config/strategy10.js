module.exports = {
    id: 10,
    name: "1H RSI 50 SELL / BUY",
    disableParameterCheck: false,
    parameterCount: 3,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1000
        },
        {
            symbol: "NZDUSD",
            account: 1001
        },
        {
            symbol: "USDCHF",
            account: 1002
        },
        {
            symbol: "USDCAD",
            account: 1003
        },
        {
            symbol: "EURUSD",
            account: 1004
        },
        {
            symbol: "GBPUSD",
            account: 1005
        },
        {
            symbol: "USDJPY",
            account: 1006
        },
        {
            symbol: "EURCHF",
            account: 1007
        },
        {
            symbol: "EURGBP",
            account: 1008
        },
        {
            symbol: "EURJPY",
            account: 1009
        },
        {
            symbol: "GBPCHF",
            account: 1010
        },
        {
            symbol: "GBPJPY",
            account: 1011
        }
    ],
    // and
    buy: [
        {
            key: "1Hlowerstart50",
            value: 1
        },
        {
            key: "1HblockedDESCRIPTIVE",
            value: -1
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
        },
        {
            key: "1HblockedDESCRIPTIVE",
            value: -1
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
