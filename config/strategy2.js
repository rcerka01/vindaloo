module.exports = {
    id: 2,
    name: "1H RSI, 4h trend related",
    disableParameterCheck: false,
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 200
        },
        {
            symbol: "NZDUSD",
            account: 201
        },
        {
            symbol: "USDCHF",
            account: 202
        },
        {
            symbol: "USDCAD",
            account: 203
        },
        {
            symbol: "EURUSD",
            account: 204
        },
        {
            symbol: "GBPUSD",
            account: 205
        },
        {
            symbol: "USDJPY",
            account: 206
        },
        {
            symbol: "EURCHF",
            account: 207
        },
        {
            symbol: "EURGBP",
            account: 208
        },
        {
            symbol: "EURJPY",
            account: 209
        },
        {
            symbol: "GBPCHF",
            account: 210
        },
        {
            symbol: "GBPJPY",
            account: 211
        }
    ],
    // and
    buy: [
        {
            key: "4HdowntrendDESCRIPTIVE",
            value: -1
        },
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
        {
            key: "4HuptrendDESCRIPTIVE",
            value: -1
        },
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
