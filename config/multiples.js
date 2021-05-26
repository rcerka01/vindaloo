module.exports = {
    accounts: [
// LIVE //////////////////////////////////////////////////////////////////////

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


// TEST
        {   
            id: 9999,
            accounts: []
        },
// STRATEGY 1, NIPUN
        {
            id: 777,
            accounts: [
                {
                    id: 19,
                    sl: 3000,
                    tp: 2000,
                    offset: 0,
                    symbol: 'OIL.WTI',
                    volume: 0.1
                },
                // Nipun
                {
                    id: 50,
                    sl: 3000,
                    tp: 2000,
                    offset: 0,
                    symbol: 'OIL.WTI',
                    volume: 0.1
                }
            ]
        },
// STRATEGY 2, HISTOGRAM ABOVE / BELOW TRESHOLD   
        {   
            id: 600,
            accounts: [
                {
                    id: 20,
                    sl: 3000,
                    tp: 0,
                    offset: 0,
                    symbol: 'OIL.WTI',
                    volume: 0.1
                }
            ]
        },
// STRATEGY 3, 1 MIN HMA, FOLLOW TREND
        {   
            id: 400,
            accounts: [
                {
                    id: 2,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'AUDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 401,
            accounts: [
                {                
                    id: 2,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'NZDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 402,
            accounts: [
                {
                    id: 2,
                    sl: 5,
                    tp: 2,
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
                    id: 2,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'USDCAD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 404,
            accounts: [
                {
                    id: 2,
                    sl: 5,
                    tp: 2,
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
                    id: 2,
                    sl: 5,
                    tp: 2,
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
                    id: 2,
                    sl: 500,
                    tp: 200,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        },
        // STRATEGY 3.1, 1 MIN HMA, AGAINST TREND
        {   
            id: 410,
            accounts: [
                {
                    id: 4,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'AUDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 411,
            accounts: [
                {                
                    id: 4,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'NZDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 412,
            accounts: [
                {
                    id: 4,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'USDCHF',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 413,
            accounts: [
                {
                    id: 4,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'USDCAD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 414,
            accounts: [
                {
                    id: 4,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'EURUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 415,
            accounts: [
                {
                    id: 4,
                    sl: 5,
                    tp: 2,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 416,
            accounts: [
                {
                    id: 4,
                    sl: 500,
                    tp: 200,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        },
// STRATEGY 4, 1 MIN HMA, CLOSE AT MIDDLE (threshold)
        {   
            id: 500,
            accounts: [
                {
                    id: 18,
                    sl: 5.5,
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
                    id: 18,
                    sl: 5.5,
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
                    id: 18,
                    sl: 5,
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
                    id: 18,
                    sl: 6,
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
                    id: 18,
                    sl: 5.5,
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
                    id: 18,
                    sl: 5.5,
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
                    id: 18,
                    sl: 600,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        },
// STRATEGY 5, 1 MIN HMA, CLOSE AT MIDDLE (treshold), FOLLOW UPTREND
        {   
            id: 700,
            accounts: [
                {
                    id: 5,
                    sl: 5.5,
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
                    id: 5,
                    sl: 5.5,
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
                    id: 5,
                    sl: 5,
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
                    id: 5,
                    sl: 6,
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
                    id: 5,
                    sl: 5.5,
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
                    id: 5,
                    sl: 5.5,
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
                    id: 5,
                    sl: 600,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        },
        // STRATEGY 5.1, 1 MIN HMA, CLOSE AT MIDDLE (treshold), FOLLOW DOWNTREND
        {   
            id: 710,
            accounts: [
                {
                    id: 6,
                    sl: 5.5,
                    tp: 0,
                    offset: 0,
                    symbol: 'AUDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 711,
            accounts: [
                {                
                    id: 6,
                    sl: 5.5,
                    tp: 0,
                    offset: 0,
                    symbol: 'NZDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 712,
            accounts: [
                {
                    id: 6,
                    sl: 5,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDCHF',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 713,
            accounts: [
                {
                    id: 6,
                    sl: 6,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDCAD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 714,
            accounts: [
                {
                    id: 6,
                    sl: 5.5,
                    tp: 0,
                    offset: 0,
                    symbol: 'EURUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 715,
            accounts: [
                {
                    id: 6,
                    sl: 5.5,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 716,
            accounts: [
                {
                    id: 6,
                    sl: 600,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        },
    // STRATEGY 6, 1 MIN RSI
        {   
            id: 800,
            accounts: [
                {
                    id: 10,
                    sl: 3,
                    tp: 1,
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
                    id: 10,
                    sl: 3,
                    tp: 1,
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
                    id: 10,
                    sl: 3,
                    tp: 1,
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
                    id: 10,
                    sl: 3,
                    tp: 1,
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
                    id: 10,
                    sl: 3,
                    tp: 1,
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
                    id: 10,
                    sl: 3,
                    tp: 1,
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
                    id: 10,
                    sl: 300,
                    tp: 100,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        }
    ]
}
