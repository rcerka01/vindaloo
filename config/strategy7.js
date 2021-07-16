module.exports = {
    id: 7,
    name: "1H RSI 50 BUY",
    disableParameterCheck: false,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 700
        },
        {
            symbol: "NZDUSD",
            account: 701
        },
        {
            symbol: "USDCHF",
            account: 702
        },
        {
            symbol: "USDCAD",
            account: 703
        },
        {
            symbol: "EURUSD",
            account: 704
        },
        {
            symbol: "GBPUSD",
            account: 705
        },
        {
            symbol: "USDJPY",
            account: 706
        },
        {
            symbol: "EURCHF",
            account: 707
        },
        {
            symbol: "EURGBP",
            account: 708
        },
        {
            symbol: "EURJPY",
            account: 709
        },
        {
            symbol: "GBPCHF",
            account: 710
        },
        {
            symbol: "GBPJPY",
            account: 711
        }
    ],
    // and
    buy: [
        {
            key: "1Hlowerstart50",
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
            key: "1Hlowerstart50",
            value: -1
        },
    ],
    // and
    sell: [
        {
            key: "1Hupperstart",
            value: 1
        },
        {
            key: "1Hlowerstart50",
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
