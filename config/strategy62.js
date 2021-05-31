module.exports = {
    id: 2006,
    name: "1 MIN RSI",
    parameterCount: 5,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 820
        },
        {
            symbol: "NZDUSD",
            account: 821
        },
        {
            symbol: "USDCHF",
            account: 822
        },
        {
            symbol: "USDCAD",
            account: 823
        },
        {
            symbol: "EURUSD",
            account: 824
        },
        {
            symbol: "GBPUSD",
            account: 825
        },
        {
            symbol: "USDJPY",
            account: 826
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
        }
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
