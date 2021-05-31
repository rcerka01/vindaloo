module.exports = {
    id: 1006,
    name: "1 MIN RSI AGAINST TREND",
    parameterCount: 5,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 810
        },
        {
            symbol: "NZDUSD",
            account: 811
        },
        {
            symbol: "USDCHF",
            account: 812
        },
        {
            symbol: "USDCAD",
            account: 813
        },
        {
            symbol: "EURUSD",
            account: 814
        },
        {
            symbol: "GBPUSD",
            account: 815
        },
        {
            symbol: "USDJPY",
            account: 816
        }
    ],
    // and
    buy: [
        {
            key: "lowerblockedDESCRIPTIVE",
            value: -1
        },
        // {
        //     key: "lowermiddleblocked",
        //     value: -1
        // },
        {
            key: "lowerstart",
            value: 1
        },
        // descriptive only, not starting trade
        {
            key: "emaDESCRIPTIVE",
            value: -1,
        },
    ],
    // or
    closeBuy: [
        {
            key: "lowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "upperblockedDESCRIPTIVE",
            value: -1
        },
        // {
        //     key: "uppermiddleblocked",
        //     value: -1
        // },
        {
            key: "upperstart",
            value: 1
        },
        // descriptive only, not starting trade
        {
            key: "emaDESCRIPTIVE",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "upperstart",
            value: -1
        }
    ]
}
