module.exports = {
    id: 0007,
    name: "15 MIN RSI NOT DEPENDANT ON TREND",
    disableParameterCheck: true,
    parameterCount: 4,
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
        }
    ],
    // and
    buy: [
        {
            key: "15lowerblockedDESCRIPTIVE",
            value: -1
        },
        // {
        //     key: "lowermiddleblocked",
        //     value: -1
        // },
        {
            key: "15lowerstart",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "15lowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "15upperblockedDESCRIPTIVE",
            value: -1
        },
        // {
        //     key: "uppermiddleblocked",
        //     value: -1
        // },
        {
            key: "15upperstart",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "15upperstart",
            value: -1
        }
    ]
}
