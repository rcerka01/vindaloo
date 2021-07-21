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
        
    // // FOR STRATEGY 8 (Nipun)
    //     {
    //         id: 001,
    //         name: "",
    //         cron: "0 00 20 * * 1-5",
    //         actions: ["closeTrades", "addToLockedAccounts"],
    //         symbols: ["OIL.WTI"],
    //         accounts: [8]
    //     },
    //     {
    //         id: 002,
    //         name: "",
    //         cron: "0 30 12 * * 1-5",
    //         actions: ["removeFromLockedAccounts"],
    //         symbols: ["OIL.WTI"],
    //         accounts: [8]
    //     },
    
    // CLOSE FOR FRIDAY      
        // {
        //     id: 0000,
        //     name: "",
        //     cron: "0 40 20 * * 5",
        //     actions: ["closeTrades", "addToLockedAccounts"],
        //     symbols: ["OIL.WTI"],
        //     accounts: [8]
        // },

        // open all trades for account 9
        {
            id: 0000,
            name: "",
            cron: "0 3 * * * 1-5",
            actions: ["setBlockedParameter"],
            symbols: [""], 
            accounts: [9]
        },

        // FX, not USD ["EURCHF". "EURGBP", "EURJPY", "GBPCHF", "GBPJPY"]
        {
            id: 0000,
            name: "",
            cron: "0 41 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["EURCHF"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 42 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["EURGBP"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 43 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["EURJPY"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 44 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["GBPCHF"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 45 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["GBPJPY"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        // FX
        {
            id: 0000,
            name: "",
            cron: "0 46 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["AUDUSD"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 47 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["NZDUSD"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 48 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["USDCHF"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 49 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["USDCAD"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },       
        {
            id: 0000,
            name: "",
            cron: "0 50 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["EURUSD"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 51 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["GBPUSD"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        {
            id: 0000,
            name: "",
            cron: "0 52 20 * * 5",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["USDJPY"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        },
        // TO REMOVE ACCOUNT IS ENOUGH TO HJAVE ONE (any) SYMBOL 
        {
            id: 0000,
            name: "",
            cron: "0 00 22 * * 7",
            actions: ["removeFromLockedAccounts"],
            symbols: ["EURUSD"], 
            accounts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        }
    ]
}
