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
        password: secret.password1,
    },
    {
        user: secret.user2,
        password: secret.password2,
    },
    {
        user: secret.user3,
        password: secret.password3,
    },
    {
        user: secret.user4,
        password: secret.password4,
    },
    {
        user: secret.user5,
        password: secret.password5,
    }]
}
