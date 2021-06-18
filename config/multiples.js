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

// STRATEGY 2, 1H RSI, 4h trend related
    {   
        id: 200,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'AUDUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 201,
        accounts: [
            {                
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.1
            },
            // LIVE REPLICA 1
            {                
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'NZDUSD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 202,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 203,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.1
            },
            // LIVE REPLICA 2
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'USDCAD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 204,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURUSD',
                volume: 0.1
            }
        ]
    },
    {   
        id: 205,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.1
            },
            // LIVE REPLICA 3
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPUSD',
                volume: 0.2
            }
        ]
    },
    {   
        id: 206,
        accounts: [
            {
                id: 2,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.1
            },
            // LIVE REPLICA 4
            {
                id: 3,
                sl: 2500,
                tp: 0,
                offset: 0,
                symbol: 'USDJPY',
                volume: 0.2
            }
        ]
    },
    {   
        id: 207,
        accounts: [
            {
                id: 2,
                sl: 23,
                tp: 0,
                offset: 0,
                symbol: 'EURCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 208,
        accounts: [
            {
                id: 2,
                sl: 18,
                tp: 0,
                offset: 0,
                symbol: 'EURGBP',
                volume: 0.1
            }
        ]
    },
    {   
        id: 209,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.1
            },
            // LIVE REPLICA 5
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'EURJPY',
                volume: 0.2
            }
        ]
    },
    {   
        id: 210,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPCHF',
                volume: 0.1
            }
        ]
    },
    {   
        id: 211,
        accounts: [
            {
                id: 2,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.1
            },
            // LIVE REPLICA 6
            {
                id: 3,
                sl: 25,
                tp: 0,
                offset: 0,
                symbol: 'GBPJPY',
                volume: 0.2
            }
        ]
    },

// STRATEGY 5, HMA CD, with trend
    // {   
    //     id: 500,
    //     accounts: [
    //         {
    //             id: 5,
    //             sl: 7,
    //             tp: 7,
    //             offset: 0,
    //             symbol: 'AUDUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 501,
    //     accounts: [
    //         {                
    //             id: 5,
    //             sl: 7,
    //             tp: 7,
    //             offset: 0,
    //             symbol: 'NZDUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 502,
    //     accounts: [
    //         {
    //             id: 5,
    //             sl: 7,
    //             tp: 7,
    //             offset: 0,
    //             symbol: 'USDCHF',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 503,
    //     accounts: [
    //         {
    //             id: 5,
    //             sl: 7,
    //             tp: 7,
    //             offset: 0,
    //             symbol: 'USDCAD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 504,
    //     accounts: [
    //         {
    //             id: 5,
    //             sl: 7,
    //             tp: 7,
    //             offset: 0,
    //             symbol: 'EURUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 505,
    //     accounts: [
    //         {
    //             id: 5,
    //             sl: 7,
    //             tp: 7,
    //             offset: 0,
    //             symbol: 'GBPUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 506,
    //     accounts: [
    //         {
    //             id: 5,
    //             sl: 700,
    //             tp: 700,
    //             offset: 0,
    //             symbol: 'USDJPY',
    //             volume: 0.1
    //         }
    //     ]
    // },
// // STRATEGY 6, HMA, 1 min, close at "threshold above middle"
    // {   
    //     id: 600,
    //     accounts: [
    //         {
    //             id: 6,
    //             sl: 4,
    //             tp: 4,
    //             offset: 0,
    //             symbol: 'AUDUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 601,
    //     accounts: [
    //         {                
    //             id: 6,
    //             sl: 4,
    //             tp: 4,
    //             offset: 0,
    //             symbol: 'NZDUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 602,
    //     accounts: [
    //         {
    //             id: 6,
    //             sl: 4,
    //             tp: 4,
    //             offset: 0,
    //             symbol: 'USDCHF',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 603,
    //     accounts: [
    //         {
    //             id: 6,
    //             sl: 4,
    //             tp: 4,
    //             offset: 0,
    //             symbol: 'USDCAD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 604,
    //     accounts: [
    //         {
    //             id: 6,
    //             sl: 4,
    //             tp: 4,
    //             offset: 0,
    //             symbol: 'EURUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 605,
    //     accounts: [
    //         {
    //             id: 6,
    //             sl: 4,
    //             tp: 4,
    //             offset: 0,
    //             symbol: 'GBPUSD',
    //             volume: 0.1
    //         }
    //     ]
    // },
    // {   
    //     id: 606,
    //     accounts: [
    //         {
    //             id: 6,
    //             sl: 400,
    //             tp: 400,
    //             offset: 0,
    //             symbol: 'USDJPY',
    //             volume: 0.1
    //         }
    //     ]
    // },
//  // STRATEGY 7, HMA, 1 min, close at "threshold above middle", with trend
//     {   
//         id: 700,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 4,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 701,
//         accounts: [
//             {                
//                 id: 7,
//                 sl: 4,
//                 tp: 4,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 702,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 4,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 703,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 4,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 704,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 4,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 705,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 4,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 706,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 400,
//                 tp: 400,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
// STRATEGY 8, NIPUN
//     {
//         id: 800,
//         accounts: [
//             {
//                 id: 8,
//                 sl: 1000,
//                 tp: 2000,
//                 offset: 0,
//                 symbol: 'OIL.WTI',
//                 volume: 0.1
//             },
//             // Nipun
//             {
//                 id: 50,
//                 sl: 1000,
//                 tp: 2000,
//                 offset: 0,
//                 symbol: 'OIL.WTI',
//                 volume: 0.1
//             }
//         ]
//     },
// // STRATEGY 9, RSI, 5 min, close / open between 40 / 60
//     {   
//         id: 900,
//         accounts: [
//             {
//                 id: 9,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 901,
//         accounts: [
//             {                
//                 id: 9,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 902,
//         accounts: [
//             {
//                 id: 9,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 903,
//         accounts: [
//             {
//                 id: 9,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 904,
//         accounts: [
//             {
//                 id: 9,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 905,
//         accounts: [
//             {
//                 id: 9,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 906,
//         accounts: [
//             {
//                 id: 9,
//                 sl: 400,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
// // STRATEGY 10, RSI, 15 min, close / open between 40 / 60
//     {   
//         id: 1000,
//         accounts: [
//             {
//                 id: 10,
//                 sl: 18,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1001,
//         accounts: [
//             {                
//                 id: 10,
//                 sl: 18,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1002,
//         accounts: [
//             {
//                 id: 10,
//                 sl: 18,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1003,
//         accounts: [
//             {
//                 id: 10,
//                 sl: 18,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1004,
//         accounts: [
//             {
//                 id: 10,
//                 sl: 18,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1005,
//         accounts: [
//             {
//                 id: 10,
//                 sl: 18,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1006,
//         accounts: [
//             {
//                 id: 10,
//                 sl: 1800,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
// // STRATEGY 11, RSI, 30 min, close / open between 40 / 60
//     {   
//         id: 1100,
//         accounts: [
//             {
//                 id: 11,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1101,
//         accounts: [
//             {                
//                 id: 11,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1102,
//         accounts: [
//             {
//                 id: 11,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1103,
//         accounts: [
//             {
//                 id: 11,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1104,
//         accounts: [
//             {
//                 id: 11,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1105,
//         accounts: [
//             {
//                 id: 11,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1106,
//         accounts: [
//             {
//                 id: 11,
//                 sl: 1000,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
// // STRATEGY 12, RSI, 45 min, close / open between 40 / 60
//     {   
//         id: 1200,
//         accounts: [
//             {
//                 id: 12,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1201,
//         accounts: [
//             {                
//                 id: 12,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1202,
//         accounts: [
//             {
//                 id: 12,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1203,
//         accounts: [
//             {
//                 id: 12,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1204,
//         accounts: [
//             {
//                 id: 12,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1205,
//         accounts: [
//             {
//                 id: 12,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1206,
//         accounts: [
//             {
//                 id: 12,
//                 sl: 1000,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
//     // SUB STRATEGY 9.1, RSI, 5 min, close / open between 40 / 60. FOLLOW TREND
//     {   
//         id: 910,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 911,
//         accounts: [
//             {                
//                 id: 7,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 912,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 913,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 914,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 915,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 4,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 916,
//         accounts: [
//             {
//                 id: 7,
//                 sl: 400,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
//     // SUB STRATEGY 10.1, RSI, 15 min, close / open between 40 / 60, not blocking 25 / 75
//     {   
//         id: 1010,
//         accounts: [
//             {
//                 id: 13,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1011,
//         accounts: [
//             {                
//                 id: 13,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1012,
//         accounts: [
//             {
//                 id: 13,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1013,
//         accounts: [
//             {
//                 id: 13,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1014,
//         accounts: [
//             {
//                 id: 13,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1015,
//         accounts: [
//             {
//                 id: 13,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1016,
//         accounts: [
//             {
//                 id: 13,
//                 sl: 2500,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
//     // SUB STRATEGY 10.2, RSI, 15 min, close / open between 40 / 60, FOLLOW TREND
//     {   
//         id: 1020,
//         accounts: [
//             {
//                 id: 14,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1021,
//         accounts: [
//             {                
//                 id: 14,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1022,
//         accounts: [
//             {
//                 id: 14,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1023,
//         accounts: [
//             {
//                 id: 14,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1024,
//         accounts: [
//             {
//                 id: 14,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1025,
//         accounts: [
//             {
//                 id: 14,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1026,
//         accounts: [
//             {
//                 id: 14,
//                 sl: 1000,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
//      // SUB SUB STRATEGY 10.2.1, RSI, 15 min, close / open between 40 / 60, FOLLOW TREND (DESCRIPTIVE)
//      {   
//         id: 10210,
//         accounts: [
//             {
//                 id: 6,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 10211,
//         accounts: [
//             {                
//                 id: 6,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 10212,
//         accounts: [
//             {
//                 id: 6,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 10213,
//         accounts: [
//             {
//                 id: 6,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 10214,
//         accounts: [
//             {
//                 id: 6,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 10215,
//         accounts: [
//             {
//                 id: 6,
//                 sl: 10,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 10216,
//         accounts: [
//             {
//                 id: 6,
//                 sl: 1000,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
//     // SUB STRATEGY 10.3, RSI, 15 min, close / open between 40 / 60, AGAINST TREND
//     {   
//         id: 1030,
//         accounts: [
//             {
//                 id: 15,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'AUDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1031,
//         accounts: [
//             {                
//                 id: 15,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'NZDUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1032,
//         accounts: [
//             {
//                 id: 15,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCHF',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1033,
//         accounts: [
//             {
//                 id: 15,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDCAD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1034,
//         accounts: [
//             {
//                 id: 15,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'EURUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1035,
//         accounts: [
//             {
//                 id: 15,
//                 sl: 25,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'GBPUSD',
//                 volume: 0.1
//             }
//         ]
//     },
//     {   
//         id: 1036,
//         accounts: [
//             {
//                 id: 15,
//                 sl: 2500,
//                 tp: 0,
//                 offset: 0,
//                 symbol: 'USDJPY',
//                 volume: 0.1
//             }
//         ]
//     },
]}
