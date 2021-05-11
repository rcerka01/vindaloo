module.exports = {
    id: 0005,
    name: "1 MIN HMA, CLOSE AT MIDDLE DEPENDING ON UPTREND",
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 700
        },
        {
            symbol: "NZDUSD",
            account: 701
        },
        {
            symbol: "USDCHF",
            account: 702
        },
        {
            symbol: "USDCAD",
            account: 703
        },
        {
            symbol: "EURUSD",
            account: 704
        },
        {
            symbol: "GBPUSD",
            account: 705
        },
        {
            symbol: "USDJPY",
            account: 706
        }
    ],
    // and
    buy: [
        {
            key: "beloweLowerThershold",
            value: -1
        },
        {
            key: "positive",
            value: -1
        },
        {
            key: "trend",
            value: 1
        },
    ],
    // or
    closeBuy: [
        {
            key: "positive",
            value: 1
        }
    ],
    // and
    sell: [
        {
            key: "aboveUpperThershold",
            value: 1
        },
        {
            key: "positive",
            value: 1
        },
        {
            key: "trend",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "positive",
            value: -1
        }
    ]
}
