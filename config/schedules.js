module.exports = {
    // ["AUDUSD", "NZDUSD", "USDCHF", "USDCAD", "EURUSD", "GBPUSD", "USDJPY"]

    // id and name not used jet

    // 0 Sun
    // (sec min hour dayM month dayW)
    // cron: "0 10 00 * * 3",

    tasks: [
                                    // single, tested
        // {
        //     id: 001,
        //     name: "",
        //     cron: "0 17 10 * * *",
        //     actions: ["closeTrades", "addToLockedAccounts"],
        //     symbols: ["OIL.WTI"], 
        //     accounts: [21]
        // },
        // {
        //     id: 002,
        //     name: "",
        //     cron: "30 17 10 * * *",
        //     actions: ["removeFromLockedAccounts"],
        //     symbols: ["OIL.WTI"],
        //     accounts: [21]
        // },
                                     // single with multiple symbols
        // {
        //     id: 003,
        //     name: "",
        //     cron: "0 26 11 * * 3",
        //     actions: ["closeTrades", "addToLockedAccounts"],
        //     symbols: ["AUDUSD", "NZDUSD", "USDCHF", "UK100", "DE30", "EU50", "USDCAD", "EURUSD", "FRA40", "US500"], 
        //     accounts: [17]
        // },
        // {
        //     id: 004,
        //     name: "",
        //     cron: "30 26 11 * * 3",
        //     actions: ["removeFromLockedAccounts"],
        //     symbols: ["AUDUSD", "NZDUSD", "USDCHF", "UK100", "DE30", "EU50", "USDCAD", "EURUSD", "FRA40", "US500"], 
        //     accounts: [17]
        // },
        
    // FOR STRATEGY 1 (multiples)
        {
            id: 001,
            name: "",
            cron: "0 00 20 * * 1-5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["OIL.WTI"],
            accounts: [777]
        },
        {
            id: 002,
            name: "",
            cron: "0 30 12 * * 1-5",
            actions: ["removeFromLockedAccounts"],
            symbols: ["OIL.WTI"],
            accounts: [777]
        },
    
    // CLOSE FOR FRIDAY      
        {
            id: 0000,
            name: "",
            cron: "0 45 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["OIL.WTI"],
            accounts: [600, 777]
        },
        // FX
        {
            id: 0000,
            name: "",
            cron: "0 46 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["AUDUSD"], 
            accounts: [400, 410, 500, 700, 710, 800, 17, 1, 3]
        },
        {
            id: 0000,
            name: "",
            cron: "0 47 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["NZDUSD"], 
            accounts: [401, 411, 501, 701, 711, 801, 17, 1, 3]
        },
        {
            id: 0000,
            name: "",
            cron: "0 48 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["USDCHF"], 
            accounts: [402, 412, 502, 702, 712, 802, 17, 1, 3]
        },
        {
            id: 0000,
            name: "",
            cron: "0 49 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["USDCAD"], 
            accounts: [403, 413, 503, 703, 713, 803, 17, 1, 3]
        },       
        {
            id: 0000,
            name: "",
            cron: "0 50 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["EURUSD"], 
            accounts: [404, 414, 504, 704, 714, 804, 17, 1, 3]
        },
        {
            id: 0000,
            name: "",
            cron: "0 51 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["GBPUSD"], 
            accounts: [405, 415, 505, 705, 715, 805, 17, 1, 3]
        },
        {
            id: 0000,
            name: "",
            cron: "0 52 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["USDJPY"], 
            accounts: [406, 416, 506, 706, 716, 806, 17, 1, 3]
        },
        // TO REMOVE ACCOUNT IS ENOUGH TO HJAVE ONE (any) SYMBOL 
        {
            id: 0000,
            name: "",
            cron: "0 30 22 * * 7",
            actions: ["removeFromLockedAccounts"],
            symbols: ["EURUSD"], 
            accounts: [777, 600, 17, 1, 3, 
                400, 401, 402, 403, 404, 405, 406, 
                410, 411, 412, 413, 414, 415, 416,
                500, 501, 502, 503, 504, 505, 506, 
                700, 701, 702, 703, 704, 705, 706, 
                710, 711, 712, 713, 714, 715, 716,
                800, 801, 802, 803, 804, 805, 806]
        }
    ]
}
