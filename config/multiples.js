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
// STRATEGY 3 //////////////////////////////////////////////////////////////
        { },
// STRATEGY 1 ////////////////////////////////////////////////////////////////////////        
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
// STRATEGY 2. HISTOGRAM ABOVE / BELOW TRESHOLD   
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
// STRATEGY 4. HMA, CLOSE AT MIDDLE  
        {   
            id: 500,
            accounts: [
                {
                    id: 18,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 501,
            accounts: [
                {
                    id: 18,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'AUDUSD',
                    volume: 0.1
                }
            ]
        },
        {   
            id: 502,
            accounts: [
                {
                    id: 18,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDCHF',
                    volume: 0.1
                }
            ]
        },
    // STRATEGY 3. HMA, DEPENDING ON TREND  
        {   
            id: 400,
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
            id: 401,
            accounts: [
                {                
                    id: 2,
                    sl: 25,
                    tp: 0,
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
                    id: 2,
                    sl: 25,
                    tp: 0,
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
                    id: 2,
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
                    id: 2,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'USDJPY',
                    volume: 0.1
                }
            ]
        }
    ]
}
