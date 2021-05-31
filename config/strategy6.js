module.exports = {
    id: 0006,
    name: "1 MIN RSI FOLLOW TREND",
    parameterCount: 5,
    subStrategies: [1006,2006],
    bind: [
        {
            symbol: "AUDUSD",
            account: 800
        },
        {
            symbol: "NZDUSD",
            account: 801
        },
        {
            symbol: "USDCHF",
            account: 802
        },
        {
            symbol: "USDCAD",
            account: 803
        },
        {
            symbol: "EURUSD",
            account: 804
        },
        {
            symbol: "GBPUSD",
            account: 805
        },
        {
            symbol: "USDJPY",
            account: 806
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
            value: 1,
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
            value: -1
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
