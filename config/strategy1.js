module.exports = 
{
    id: 0001,
    name: "5min MA5/20 MACD",
    parameterCount: 4,
    bind: [
        {
            symbol: "OIL.WTI",
            account: 777
        },
        {
            symbol: "US100",
            account: 778
        },                
    ],
    // and
    buy: [
        {
            key: "5minMA",
            value: 1
        },
        {
            key: "5minHistogram",
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
            key: "5minHistogram",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "5minMA",
            value: -1
        },
        {
            key: "5minHistogram",
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
            key: "5minHistogram",
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
