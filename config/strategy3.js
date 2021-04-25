module.exports = {
    id: 0003,
    name: "1 MIN HMA, FOLLOW TREND",
    parameterCount: 3,
    bind: [
        {
            symbol: "AUDUSD",
            account: 400
        },
        {
            symbol: "NZDUSD",
            account: 401
        },
        {
            symbol: "USDCHF",
            account: 402
        },
        {
            symbol: "USDCAD",
            account: 403
        },
        {
            symbol: "EURUSD",
            account: 404
        },
        {
            symbol: "GBPUSD",
            account: 405
        },
        {
            symbol: "USDJPY",
            account: 406
        }
    ],
    // and
    buy: [
        {
            key: "low",
            value: -1
        },
        {
            key: "trend",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "high",
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
            key: "trend",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "low",
            value: -1
        }
    ]
}
