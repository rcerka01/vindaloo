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
    lockedAccounts: [18,101,102,103,104],
    multiples: [
        {   // 35
            id: 1001,
            accounts: [
                    {
                    id: 101,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                },
                {
                    id: 12,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },
        {   // 40
            id: 1002,
            accounts: [
                    {
                    id: 102,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                },
                {
                    id: 13,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },        
        {   // 45
            id: 1003,
            accounts: [
                    {
                    id: 103,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                },
                {
                    id: 14,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },        
        {   // 50 0.0009
            id: 1004,
            accounts: [
                    {
                    id: 104,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                },
                {
                    id: 15,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                },
                {
                    id: 16,
                    sl: 25,
                    tp: 0,
                    offset: 0,
                    symbol: 'GBPUSD',
                    volume: 0.1
                }
            ]
        },
    ],
    login: [{
        id: 1,
        type: 'demo',
        user: secret.user1,
        password: secret.password1
    },
    {   id: 2,
        type: 'demo',
        user: secret.user2,
        password: secret.password2
    },
    {   id: 3,
        type: 'demo',
        user: secret.user3,
        password: secret.password3
    },
    {
        id: 4,
        type: 'demo',
        user: secret.user4,
        password: secret.password4
    },
    {
        id: 5,
        type: 'demo',
        user: secret.user5,
        password: secret.password5
    },
    {
        id: 6,
        type: 'demo',
        user: secret.user6,
        password: secret.password6
    },
    {
        id: 7,
        type: 'demo',
        user: secret.user7,
        password: secret.password7
    },
    {
        id: 8,
        type: 'demo',
        user: secret.user8,
        password: secret.password8
    },
    {
        id: 9,
        type: 'demo',
        user: secret.user9,
        password: secret.password9
    },
    {
        id: 10,
        type: 'demo',
        user: secret.user10,
        password: secret.password10
    },
    {
        id: 11,
        type: 'demo',
        user: secret.user11,
        password: secret.password11
    },
    {
        id: 12,
        type: 'demo',
        user: secret.user12,
        password: secret.password12
    },
    {
        id: 13,
        type: 'demo',
        user: secret.user13,
        password: secret.password13
    },
    {
        id: 14,
        type: 'demo',
        user: secret.user14,
        password: secret.password14
    },
    {
        id: 15,
        type: 'demo',
        user: secret.user15,
        password: secret.password15
    },
    {
        id: 16,
        type: 'demo',
        user: secret.user16,
        password: secret.password16
    },


    // Nipun
    {
        id: 17,
        type: 'demo',
        user: secret.user17,
        password: secret.password17
    },
    // Marsel
    {
        id: 18,
        type: 'demo',
        user: secret.user18,
        password: secret.password18
    },


    {
        id: 101,
        type: 'real',
        user: secret.user101,
        password: secret.password101
    },
    {
        id: 102,
        type: 'real',
        user: secret.user102,
        password: secret.password102
    },
    {
        id: 103,
        type: 'real',
        user: secret.user103,
        password: secret.password103
    },
    {
        id: 104,
        type: 'real',
        user: secret.user104,
        password: secret.password104
    }]
}
