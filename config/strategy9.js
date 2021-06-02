module.exports = {
    id: 9,
    name: "5 MIN RSI NOT DEPENDANT ON TREND",
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
            key: "5lowerblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "5lowerstart",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "5lowerstart",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "5upperblockedDESCRIPTIVE",
            value: -1
        },
        {
            key: "5upperstart",
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "5upperstart",
            value: -1
        }
    ]
}
