module.exports = {
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
            id: 1001,
            name: "",
            cron: "0 45 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["AUDUSD", "NZDUSD", "USDCHF", "USDCAD", "EURUSD", "GBPUSD", "USDJPY"], 
            accounts: [17,1]
        },
        {
            id: 1011,
            name: "",
            cron: "0 45 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["OIL.WTI"],
            accounts: [600, 777]
        },
        {
            id: 1021,
            name: "",
            cron: "0 45 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["GBPUSD","AUDUSD","USDCHF"],
            accounts: [500, 501, 502]
        },
        {
            id: 1031,
            name: "",
            cron: "0 45 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["AUDUSD", "NZDUSD", "USDCHF", "USDCAD", "EURUSD", "GBPUSD", "USDJPY"], 
            accounts: [400, 401, 402, 403, 404, 405, 406]
        },
        // TO REMOVE ACCOUNT IS ENOUGH TO HJAVE ONE (any) SYMBOL 
        {
            id: 1002,
            name: "",
            cron: "0 30 22 * * 7",
            actions: ["removeFromLockedAccounts"],
            symbols: ["EURUSD"], 
            accounts: [17,1]
        },
        {
            id: 1012,
            name: "",
            cron: "0 30 22 * * 7",
            actions: ["removeFromLockedAccounts"],
            symbols: ["OIL.WTI"],
            accounts: [600, 777]
        },
        {
            id: 1022,
            name: "",
            cron: "0 30 22 * * 7",
            actions: ["removeFromLockedAccounts"],
            symbols: ["EURUSD"],
            accounts: [500, 501, 502]
        },
        {
            id: 1023,
            name: "",
            cron: "0 30 22 * * 7",
            actions: ["removeFromLockedAccounts"],
            symbols: ["EURUSD"], 
            accounts: [400, 401, 402, 403, 404, 405, 406]
        }
    ]
}
