module.exports = 

// OIL.WTI

// EU50
// FRA40
// US500
// DE30
// UK100

// NZDUSD
// AUDUSD
// EURUSD
// USDCAD
// GBPUSD
// USDJPY
// USDCHF
// EURUSD
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
            symbol: "UK100",
            account: 778
        }, 
        {
            symbol: "DE30",
            account: 779
        },
        {
            symbol: "US500",
            account: 780
        }, 
        {
            symbol: "FRA40",
            account: 781
        },
        {
            symbol: "EU50",
            account: 782
        },  
        
        {
            symbol: "EURUSD",
            account: 791
        }, 
        {
            symbol: "USDCHF",
            account: 792
        },
        {
            symbol: "USDJPY",
            account: 793
        }, 
        {
            symbol: "GBPUSD",
            account: 794
        },
        {
            symbol: "USDCAD",
            account: 795
        },
        {
            symbol: "EURUSD",
            account: 796
        }, 
        {
            symbol: "AUDUSD",
            account: 797
        },
        {
            symbol: "NZDUSD",
            account: 798
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
