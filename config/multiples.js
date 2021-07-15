module.exports = {
    accounts: [
// // LIVE //////////////////////////////////////////////////////////////////////
// {   // 35
//     id: 1001,
//     accounts: [
//             {
//             id: 101,
//             sl: 25,
//             tp: 0,
//             offset: 0,
//             symbol: 'GBPUSD',
//             volume: 0.1
//         }
//     ]
// },
// {   // 40
//     id: 1002,
//     accounts: [
//             {
//             id: 102,
//             sl: 25,
//             tp: 0,
//             offset: 0,
//             symbol: 'GBPUSD',
//             volume: 0.1
//         }
//     ]
// },        
// {   // 45
//     id: 1003,
//     accounts: [
//             {
//             id: 103,
//             sl: 25,
//             tp: 0,
//             offset: 0,
//             symbol: 'GBPUSD',
//             volume: 0.1
//         }
//     ]
// },        
// {   // 50 0.0009
//     id: 1004,
//     accounts: [
//             {
//             id: 104,
//             sl: 25,        {   

//             tp: 0,
//             offset: 0,
//             symbol: 'GBPUSD',
//             volume: 0.1
//         }
//     ]
// },

// // TEST
//         {   
//             id: 9999,
//             accounts: [
//                 {
//                     id: 9,
//                     sl: 25,
//                     tp: 0,
//                     offset: 0,
//                     symbol: 'GBPUSD',
//                     volume: 0.1
//                 }
//             ]
//         },

 // STRATEGY 3, 1H RSI
    {   
        id: 300,
        accounts: [
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            },
            // LIVE
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 301,
        accounts: [
            {                
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            },            
            // LIVE
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 302,
        accounts: [
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 303,
        accounts: [
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            },
            // LIVE
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 304,
        accounts: [
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 305,
        accounts: [
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            },
            // LIVE
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 306,
        accounts: [
            {
                id: 3,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 307,
        accounts: [
            {
                id: 3,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 308,
        accounts: [
            {
                id: 3,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            },
            // LIVE
            {
                id: 2,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.2
            }
        ]
    },
    {   
        id: 309,
        accounts: [
            {
                id: 3,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            },
            // LIVE
            {
                id: 2,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.2
            }
        ]
    },
    {   
        id: 310,
        accounts: [
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 311,
        accounts: [
            {
                id: 3,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            },
            // LIVE
            {
                id: 2,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.2
            }
        ]
    },

// STRATEGY 4, 1H RSI, 4h trend related
    {   
        id: 400,
        accounts: [
            {
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            },
        ]
    },
    {   
        id: 401,
        accounts: [
            {                
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            },
        ]
    },
    {   
        id: 402,
        accounts: [
            {
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 403,
        accounts: [
            {
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            },
        ]
    },
    {   
        id: 404,
        accounts: [
            {
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 405,
        accounts: [
            {
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 406,
        accounts: [
            {
                id: 4,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 407,
        accounts: [
            {
                id: 4,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 408,
        accounts: [
            {
                id: 4,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 409,
        accounts: [
            {
                id: 4,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 410,
        accounts: [
            {
                id: 4,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 411,
        accounts: [
            {
                id: 4,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },

// STRATEGY 5, 1H RSI
    {   
        id: 500,
        accounts: [
            {
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 501,
        accounts: [
            {                
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 502,
        accounts: [
            {
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 503,
        accounts: [
            {
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 504,
        accounts: [
            {
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 505,
        accounts: [
            {
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 506,
        accounts: [
            {
                id: 5,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 507,
        accounts: [
            {
                id: 5,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 508,
        accounts: [
            {
                id: 5,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 509,
        accounts: [
            {
                id: 5,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 510,
        accounts: [
            {
                id: 5,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 511,
        accounts: [
            {
                id: 5,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },
    // STRATEGY 6, 1H RSI 45 BUY
    {   
        id: 600,
        accounts: [
            {
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 601,
        accounts: [
            {                
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 602,
        accounts: [
            {
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 603,
        accounts: [
            {
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 604,
        accounts: [
            {
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 605,
        accounts: [
            {
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 606,
        accounts: [
            {
                id: 6,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 607,
        accounts: [
            {
                id: 6,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 608,
        accounts: [
            {
                id: 6,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 609,
        accounts: [
            {
                id: 6,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 610,
        accounts: [
            {
                id: 6,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 611,
        accounts: [
            {
                id: 6,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },
     // STRATEGY 7, 1H RSI 50 BUY
     {   
        id: 700,
        accounts: [
            {
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 701,
        accounts: [
            {                
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 702,
        accounts: [
            {
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 703,
        accounts: [
            {
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 704,
        accounts: [
            {
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 705,
        accounts: [
            {
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 706,
        accounts: [
            {
                id: 7,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 707,
        accounts: [
            {
                id: 7,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 708,
        accounts: [
            {
                id: 7,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 709,
        accounts: [
            {
                id: 7,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 710,
        accounts: [
            {
                id: 7,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 711,
        accounts: [
            {
                id: 7,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },
     // STRATEGY 8, 1H RSI 55 SELL
     {   
        id: 800,
        accounts: [
            {
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 801,
        accounts: [
            {                
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 802,
        accounts: [
            {
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 803,
        accounts: [
            {
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 804,
        accounts: [
            {
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 805,
        accounts: [
            {
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 806,
        accounts: [
            {
                id: 8,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 807,
        accounts: [
            {
                id: 8,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 808,
        accounts: [
            {
                id: 8,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 809,
        accounts: [
            {
                id: 8,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 810,
        accounts: [
            {
                id: 8,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 811,
        accounts: [
            {
                id: 8,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },
     // STRATEGY 9, 1H RSI 50 SELL
     {   
        id: 900,
        accounts: [
            {
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 901,
        accounts: [
            {                
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 902,
        accounts: [
            {
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 903,
        accounts: [
            {
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 904,
        accounts: [
            {
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 905,
        accounts: [
            {
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 906,
        accounts: [
            {
                id: 9,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 907,
        accounts: [
            {
                id: 9,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 908,
        accounts: [
            {
                id: 9,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 909,
        accounts: [
            {
                id: 9,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 910,
        accounts: [
            {
                id: 9,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 911,
        accounts: [
            {
                id: 9,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },
    // STRATEGY 10, 1H RSI 50 SELL AND BUY, BLOCKED
    {   
        id: 1000,
        accounts: [
            {
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1001,
        accounts: [
            {                
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1002,
        accounts: [
            {
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1003,
        accounts: [
            {
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1004,
        accounts: [
            {
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1005,
        accounts: [
            {
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1006,
        accounts: [
            {
                id: 10,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1007,
        accounts: [
            {
                id: 10,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1008,
        accounts: [
            {
                id: 10,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1009,
        accounts: [
            {
                id: 10,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1010,
        accounts: [
            {
                id: 10,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.3
            }
        ]
    },
    {   
        id: 1011,
        accounts: [
            {
                id: 10,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.3
            }
        ]
    },
     // STRATEGY 11, 1H RSI 50 SELL AND BUY
    {   
        id: 1100,
        accounts: [
            {
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1101,
        accounts: [
            {                
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1102,
        accounts: [
            {
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1103,
        accounts: [
            {
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1104,
        accounts: [
            {
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1105,
        accounts: [
            {
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1106,
        accounts: [
            {
                id: 11,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1107,
        accounts: [
            {
                id: 11,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1108,
        accounts: [
            {
                id: 11,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1109,
        accounts: [
            {
                id: 11,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1110,
        accounts: [
            {
                id: 11,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1111,
        accounts: [
            {
                id: 11,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    },
    // 1H RSI 50 SELL / BUY, BOTH DIRECTIONS 47 - 53
    {   
        id: 1200,
        accounts: [
            {
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1201,
        accounts: [
            {                
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1202,
        accounts: [
            {
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1203,
        accounts: [
            {
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1204,
        accounts: [
            {
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1205,
        accounts: [
            {
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1206,
        accounts: [
            {
                id: 12,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1207,
        accounts: [
            {
                id: 12,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1208,
        accounts: [
            {
                id: 12,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1209,
        accounts: [
            {
                id: 12,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1210,
        accounts: [
            {
                id: 12,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 1211,
        accounts: [
            {
                id: 12,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            }
        ]
    }
]}
