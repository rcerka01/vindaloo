var secret = require("./secret");

module.exports = {
    app: {
        protocol: "http",
        port: "3011"
    },
    ws: {
        url: "wss://ws.xapi.pro/demo"
    },
    wsLive: {
        url: "wss://ws.xtb.com/real"
    },
    timedependant: {
        openTime: {
            hour: '7',
            minute: '00'
        },
        closeTime: {
            hour: '18',
            minute: '30'
        },
        closeSymbols: ['GBPUSD'],
        closeAccounts: [11]
    },
    oneMinuteIntevalSchedules: [
        { account: 13,
                 items: [{
                    symbol: 'GBPUSD',
                    threshold: 10
                 }]
        },
        { account: 12,
            items: [{
               symbol: 'GBPUSD',
               threshold: 15
            }]
        }
    ],
    login: [{
        user: secret.user1,
        password: secret.password1
    },
    {
        user: secret.user2,
        password: secret.password2
    },
    {
        user: secret.user3,
        password: secret.password3
    },
    {
        user: secret.user4,
        password: secret.password4
    },
    {
        user: secret.user5,
        password: secret.password5
    },
    {
        user: secret.user6,
        password: secret.password6
    },
    {
        user: secret.user7,
        password: secret.password7
    },
    {
        user: secret.user8,
        password: secret.password8
    },
    {
        user: secret.user9,
        password: secret.password9
    },
    {
        user: secret.user10,
        password: secret.password10
    },
    {
        user: secret.user11,
        password: secret.password11
    },
    {
        user: secret.user12,
        password: secret.password12
    },
    {
        user: secret.user13,
        password: secret.password13
    },
    {
        user: secret.user14,
        password: secret.password14
    },
    {
        user: secret.user15,
        password: secret.password15
    },
    {
        user: secret.user16,
        password: secret.password16
    },
    {
        user: secret.user17,
        password: secret.password17
    },
    {
        user: secret.user18,
        password: secret.password18
    },
    {
        user: secret.user19,
        password: secret.password19
    },
    {
        user: secret.user20,
        password: secret.password20
    },
    {
        user: secret.user21,
        password: secret.password21
    },
    {
        user: secret.user22,
        password: secret.password22
    },
    {
        user: secret.user23,
        password: secret.password23
    },
    {
        user: secret.user24,
        password: secret.password24
    },
    {
        user: secret.user25,
        password: secret.password25
    }]
}
