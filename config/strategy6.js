module.exports = {
    id: 6,
    name: "ADJUSTED STRATEGY 8",
    disableParameterCheck: false,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 600
        },
        {
            symbol: "NZDUSD",
            account: 601
        },
        {
            symbol: "USDCHF",
            account: 602
        },
        {
            symbol: "USDCAD",
            account: 603
        },
        {
            symbol: "EURUSD",
            account: 604
        },
        {
            symbol: "GBPUSD",
            account: 605
        },
        {
            symbol: "USDJPY",
            account: 606
        },
        {
            symbol: "EURCHF",
            account: 607
        },
        {
            symbol: "EURGBP",
            account: 608
        },
        {
            symbol: "EURJPY",
            account: 609
        },
        {
            symbol: "GBPCHF",
            account: 610
        },
        {
            symbol: "GBPJPY",
            account: 611
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
