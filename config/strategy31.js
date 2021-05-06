module.exports = {
    id: 1003,
    name: "1 MIN HMA, AGAINST TREND",
    parameterCount: 3,
    bind: [
        {
            symbol: "AUDUSD",
            account: 410
        },
        {
            symbol: "NZDUSD",
            account: 411
        },
        {
            symbol: "USDCHF",
            account: 412
        },
        {
            symbol: "USDCAD",
            account: 413
        },
        {
            symbol: "EURUSD",
            account: 414
        },
        {
            symbol: "GBPUSD",
            account: 415
        },
        {
            symbol: "USDJPY",
            account: 416
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
            value: -1
        }
    ],
    // or
    closeBuy: [
        {
            key: "high",
            value: 1
        },
        {
            key: "trend",
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
            value: 1
        }
    ],
    // or
    closeSell: [
        {
            key: "low",
            value: -1
        },
        {
            key: "trend",
            value: -1
        }
    ]
}
