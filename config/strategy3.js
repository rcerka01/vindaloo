module.exports = 
{
    id: 0003,
    name: "5min MA5/20 MACD Histogram open / Histogram close",
    parameterCount: 5,
    bind: [
        {
            symbol: "OIL.WTI",
            account: 577
        }

    ],
    buy: [
        {
            key: "5minMA",
            value: 1
        },
        {
            key: "5minHistogramOpen",
            value: 1
        },
        {
            key: "5minSignal",
            value: 1
        },
        {
            key: "5minMacd",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "5minMA",
            value: -1
        },
        {
            key: "5minSignal",
            value: -1
        },
        {
            key: "5minMacd",
            value: -1
        },            
        {
            key: "5minHistogramClose",
            value: -1
        }
    ],
    sell: [
        {
            key: "5minMA",
            value: -1
        },
        {
            key: "5minHistogramOpen",
            value: -1
        },
        {
            key: "5minSignal",
            value: -1
        },
        {
            key: "5minMacd",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "5minHistogramClose",
            value: 1
        },
        {
            key: "5minMA",
            value: 1
        },
        {
            key: "5minSignal",
            value: 1
        },
        {
            key: "5minMacd",
            value: 1
        }
    ]
}
