var secret = require("./secret");

module.exports = {
    app: {
        protocol: "http",
        port: "3011"
    },
    ws: {
        url: "wss://ws.xapi.pro/demo"
    },
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
    }]
}
