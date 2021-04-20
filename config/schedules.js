module.exports = {

    // 0 Sun
    // (sec min hour dayM month dayW)
    tasks: [
        {
            id: 001,
            name: "",
            cron: "0 21 12 * * 2",
            actions: ["closeTrades", "addToLockedAccounts"],
            symbols: ["OIL.WTI"],
            accounts: [21]
        },
        // {
        //     id: 002,
        //     name: "",
        //     schedule: "",
        //     action: "",
        //     accounts: [21]
        // }
    ]
}
