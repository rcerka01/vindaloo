const secret = require("./secret");
const login = require("./login");
const multiples = require("./multiples");
const schedules = require("./schedules");
const strategyTest = require("./strategyTest");
const strategy1 = require("./strategy1");
const strategy2 = require("./strategy2");
const strategy3 = require("./strategy3");
const strategy31 = require("./strategy31");
const strategy4 = require("./strategy4");
const strategy5 = require("./strategy5");
const strategy51 = require("./strategy51");
const strategy6 = require("./strategy6");

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
    db: {
        test: {
            uri: "mongodb+srv://vindaloo:" + secret.db.test.password + "@cluster0.k5ziu.mongodb.net/vindaloo?retryWrites=true&w=majority",
            name: "vindaloo"
        },
        live: {
            uri: "",
            name: "vindaloo"
        }
        
    },
    login: login.accounts,
    multiples: multiples.accounts,
    schedules: schedules.tasks,
    strategies: [
        strategy1,
        strategy2,
        strategy3,
        strategy31,
        strategy4,
        strategy5,
        strategy51,
        strategy6,
        strategyTest
    ]
}
