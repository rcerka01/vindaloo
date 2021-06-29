module.exports = {
    id: 21,
    name: "1H RSI, 4h trend related",
    disableParameterCheck: true,
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 2001
        },
        {
            symbol: "NZDUSD",
            account: 2011
        },
        {
            symbol: "USDCHF",
            account: 2021
        },
        {
            symbol: "USDCAD",
            account: 2031
        },
        {
            symbol: "EURUSD",
            account: 2041
        },
        {
            symbol: "GBPUSD",
            account: 2051
        },
        {
            symbol: "USDJPY",
            account: 2061
        },
        {
            symbol: "EURCHF",
            account: 2071
        },
        {
            symbol: "EURGBP",
            account: 2081
        },
        {
            symbol: "EURJPY",
            account: 2091
        },
        {
            symbol: "GBPCHF",
            account: 2101
        },
        {
            symbol: "GBPJPY",
            account: 2111
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
