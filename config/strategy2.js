module.exports = {
    id: 0002,
    name: "5 MIN, MACD HISTOGRAM, ABOVE / BELOW THRESHOLD",
    parameterCount: 3,
    subStrategies: [],
    bind: [
        {
            symbol: "OIL.WTI",
            account: 600
        }
    ],
    // and
    buy: [
        {
            key: "histogram",
            value: 1
        },
        {
            key: "signal",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "side",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "histogram",
            value: -1
        },
        {
            key: "signal",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "side",
            value: 1
        }
    ]
}
