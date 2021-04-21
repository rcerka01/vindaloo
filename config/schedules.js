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
                                              // multiples
        // {
        //     id: 005,
        //     name: "",
        //     cron: "0 49 11 * * 3",
        //     actions: ["closeTrades", "addToLockedAccounts"],
        //     symbols: ["OIL.WTI"],
        //     accounts: [677]
        // },
        // {
        //     id: 006,
        //     name: "",
        //     cron: "30 49 11 * * 3",
        //     actions: ["removeFromLockedAccounts"],
        //     symbols: ["OIL.WTI"],
        //     accounts: [677]
        // },
    ]
}
