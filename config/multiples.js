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
        { 
            id: 577,
            accounts: [
                {
                    id: 18,
                    sl: 3000,
                    tp: 0,
                    offset: 0,
                    symbol: 'OIL.WTI',
                    volume: 0.1
                },
                {
                    id: 51,
                    sl: 3000,
                    tp: 0,
                    offset: 0,
                    symbol: 'OIL.WTI',
                    volume: 0.1
                }
            ]
        },
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
// STRATEGY 2. HISTOGRAM ABOVE / BELOW TRESHOLD, CLOSE AT POSITIVE / NEGATIVE      
        {   
            id: 600,
            accounts: [
                {
                    id: 20,
                    sl: 2000,
                    tp: 0,
                    offset: 0,
                    symbol: 'OIL.WTI',
                    volume: 0.1
                }
            ]
        }
    ]
}
