module.exports = {
    id: 3,
    name: "1H RSI",
    disableParameterCheck: false,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 300
        },
        {
            symbol: "NZDUSD",
            account: 301
        },
        {
            symbol: "USDCHF",
            account: 302
        },
        {
            symbol: "USDCAD",
            account: 303
        },
        {
            symbol: "EURUSD",
            account: 304
        },
        {
            symbol: "GBPUSD",
            account: 305
        },
        {
            symbol: "USDJPY",
            account: 306
        },
        {
            symbol: "EURCHF",
            account: 307
        },
        {
            symbol: "EURGBP",
            account: 308
        },
        {
            symbol: "EURJPY",
            account: 309
        },
        {
            symbol: "GBPCHF",
            account: 310
        },
        {
            symbol: "GBPJPY",
            account: 311
        }
    ],
    // and
    buy: [
        // {
        //     key: "4HdowntrendDESCRIPTIVE",
        //     value: -1
        // },
        {
            key: "1Hlowerstart",
            value: 1
        },
        {
            key: "1Hupperstart",
            value: -1
        },
        // {
        //     key: "1Huppertop",
        //     value: -1
        // },
        // {
        //     key: "1Hlowerbottom",
        //     value: -1
        // }
    ],
    // or
    closeBuy: [
        // {
        //     key: "4HdowntrendDESCRIPTIVE",
        //     value: 1
        // },
        {
            key: "1Hlowerstart",
            value: -1
        },
        // {
        //     key: "1Huppertop",
        //     value: 1
        // }
    ],
    // and
    sell: [
        // {
        //     key: "4HuptrendDESCRIPTIVE",
        //     value: -1
        // },
        {
            key: "1Hupperstart",
            value: 1
        },
        {
            key: "1Hlowerstart",
            value: -1
        },
        // {
        //     key: "1Huppertop",
        //     value: -1
        // },
        // {
        //     key: "1Hlowerbottom",
        //     value: -1
        // }
    ],
    // or
    closeSell: [
        // {
        //     key: "4HuptrendDESCRIPTIVE",
        //     value: 1
        // },
        {
            key: "1Hupperstart",
            value: -1
        },
        // {
        //     key: "1Hlowerbottom",
        //     value: 1
        // }
    ]
}
