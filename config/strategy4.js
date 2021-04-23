module.exports = {
    id: 0004,
    name: "1 MIN HMA, CLOSE AT MIDDLE",
    parameterCount: 3,
    bind: [
        {
            symbol: "GBPUSD",
            account: 500
        },
        {
            symbol: "AUDUSD",
            account: 501
        },
        {
            symbol: "USDCHF",
            account: 502
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
        }
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
