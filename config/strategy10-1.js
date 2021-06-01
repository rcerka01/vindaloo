module.exports = {
    id: 101,
    name: "15 MIN RSI NOT BLOCKING 75 / 25",
    disableParameterCheck: true,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1100
        },
        {
            symbol: "NZDUSD",
            account: 1101
        },
        {
            symbol: "USDCHF",
            account: 1102
        },
        {
            symbol: "USDCAD",
            account: 1103
        },
        {
            symbol: "EURUSD",
            account: 1104
        },
        {
            symbol: "GBPUSD",
            account: 1105
        },
        {
            symbol: "USDJPY",
            account: 1106
        }
    ],
    // and
    buy: [
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
