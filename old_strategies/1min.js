module.exports = 

// OIL.WTI

// EU50
// FRA40
// US500
// DE30
// UK100

// http://trade.raitis.co.uk/17/25/0/0/buy/USDJPY/0.1
//  NZDUSD
//  AUDUSD
//  EURUSD
//  USDCAD
//  GBPUSD
//  USDJPY
//  USDCHF
{
    id: 0002,
    name: "1min MA5/20 MACD",
    parameterCount: 4,
    bind: [
        {
            symbol: "OIL.WTI",
            account: 677
        },

        {
            symbol: "UK100",
            account: 678
        }, 
        {
            symbol: "DE30",
            account: 679
        },
        {
            symbol: "US500",
            account: 680
        }, 
        {
            symbol: "FRA40",
            account: 681
        },
        {
            symbol: "EU50",
            account: 682
        },  
        
        {
            symbol: "EURUSD",
            account: 691
        }, 
        {
            symbol: "USDCHF",
            account: 692
        },
        {
            symbol: "USDJPY",
            account: 693
        }, 
        {
            symbol: "GBPUSD",
            account: 694
        },
        {
            symbol: "USDCAD",
            account: 695
        },
        {
            symbol: "AUDUSD",
            account: 697
        },
        {
            symbol: "NZDUSD",
            account: 698
        },
    ],
    // and
    buy: [
        {
            key: "1minMA",
            value: 1
        },
        {
            key: "1minHistogram",
            value: 1
        },
        {
            key: "1minSignal",
            value: 1
        },
        {
            key: "1minMacd",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "1minMA",
            value: -1
        },
        {
            key: "1minSignal",
            value: -1
        },
        {
            key: "1minMacd",
            value: -1
        },            
        {
            key: "1minHistogram",
            value: -1
        }
    ],
    // and
    sell: [
        {
            key: "1minMA",
            value: -1
        },
        {
            key: "1minHistogram",
            value: -1
        },
        {
            key: "1minSignal",
            value: -1
        },
        {
            key: "1minMacd",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "1minHistogram",
            value: 1
        },
        {
            key: "1minMA",
            value: 1
        },
        {
            key: "1minSignal",
            value: 1
        },
        {
            key: "1minMacd",
            value: 1
        }
    ]
}
