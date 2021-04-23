module.exports = {
    id: 0002,
    name: "5 MIN, MACD HISTOGRAM, ABOVE / BELOW THRESHOLD",
    parameterCount: 2,
    bind: [
        {
            symbol: "OIL.WTI",
            account: 600
        }
    ],
    // and
    buy: [
        {
            key: "abovePositiveTreshold",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "abovePositiveTreshold",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "belowNegativeTreshold",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "belowNegativeTreshold",
            value: 1
        }
    ]
}
