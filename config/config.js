const login = require("./login");
const locked = require("./locked");
const multiples = require("./multiples");
const strategy1 = require("./strategy1");
const strategy2 = require("./strategy2");

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
    lockedAccounts: locked.accounts,
    login: login.accounts,
    multiples: multiples.accounts,
    strategies: [
        strategy1,
        strategy2
    ]
}
