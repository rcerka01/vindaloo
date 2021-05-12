module.exports = {
    id: 1005,
    name: "1 MIN HMA, CLOSE AT MIDDLE (treshold), FOLLOW DOWNTREND",
    parameterCount: 4,
    subStrategies: [],
    bind: [
        {
            symbol: "AUDUSD",
            account: 710
        },
        {
            symbol: "NZDUSD",
            account: 711
        },
        {
            symbol: "USDCHF",
            account: 712
        },
        {
            symbol: "USDCAD",
            account: 713
        },
        {
            symbol: "EURUSD",
            account: 714
        },
        {
            symbol: "GBPUSD",
            account: 715
        },
        {
            symbol: "USDJPY",
            account: 716
        }
    ],
    // and
    buy: [
        {
            key: "low",
            value: -1
        },
        {
            key: "positive",
            value: -1
        },
        {
            key: "trend",
            value: -1
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
            key: "high",
            value: 1
        },
        {
            key: "positive",
            value: 1
        },
        {
            key: "trend",
            value: 1
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
