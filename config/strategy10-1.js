module.exports = {
    id: 101,
    name: "15 MIN RSI NOT BLOCKING 75 / 25",
    disableParameterCheck: true,
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 1010
        },
        {
            symbol: "NZDUSD",
            account: 1011
        },
        {
            symbol: "USDCHF",
            account: 1012
        },
        {
            symbol: "USDCAD",
            account: 1013
        },
        {
            symbol: "EURUSD",
            account: 1014
        },
        {
            symbol: "GBPUSD",
            account: 1015
        },
        {
            symbol: "USDJPY",
            account: 1016
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
