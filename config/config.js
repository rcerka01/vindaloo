const secret = require("./secret");
const login = require("./login");
const multiples = require("./multiples");
const schedules = require("./schedules");
const strategyTest = require("./strategyTest");
const strategy5 = require("./strategy5");
const strategy6 = require("./strategy6");
const strategy7 = require("./strategy7");
const strategy8 = require("./strategy8");
const strategy9 = require("./strategy9");
const strategy10 = require("./strategy10");
const strategy10sub1 = require("./strategy10-1");
const strategy10sub2 = require("./strategy10-2");
const strategy10sub3 = require("./strategy10-3");
const strategy11 = require("./strategy11");
const strategy12 = require("./strategy12");

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
        strategy5,
        strategy6,
        strategy7,
        strategy8,
        strategy9,
        strategy10,
        strategy10sub1,
        strategy10sub2,
        strategy10sub3,
        strategy11,
        strategy12,
        strategyTest
    ]
}
