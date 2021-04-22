module.exports = {
    id: 0002,
    name: "1min MA5/20 MACD",
    parameterCount: 3,
    bind: [
        {
            symbol: "OIL.WTI",
            account: 600
        }
    ],
    // and
    buy: [
        {
            key: "higherHistogramTreshold",
            value: 1
        },
        {
            key: "positiveHistogram",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "positiveHistogram",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "lowerHistogramTreshold",
            value: -1
        },
        {
            key: "positiveHistogram",
            value: -1
        },
    ],
    // or
    closeSell: [
        {
            key: "positiveHistogram",
            value: 1
        }
    ]
}
