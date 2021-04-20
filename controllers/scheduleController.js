const conf = require("../config/config");
const schedule = require('node-schedule');

function stringToComand(str) {
    if (str === "closeTrades") {
        //todo close trades contr -> acetion
    }
    if (str === "addToLockedAccounts") {
        //todo close trades contr -> acetion      
    }
    if (str === "removeFromLockedAccounts") {
        //todo close trades contr -> acetion      
    }
}

function run() {
    // conf.schedules.forEach(t=> console.log(t));

    // const rule = new schedule.RecurrenceRule();
    // rule.second = 42;
    // rule.dayOfWeek = "0-6";
    // const job = schedule.scheduleJob(rule, function(){
    //     console.log('The answer to life, the universe, and everything!');
    // });


// second (0-59)
// minute (0-59)
// hour (0-23)
// date (1-31)
// month (0-11)
// year
// dayOfWeek (0-6) Starting with Sunday
// tz




    //     schedule.scheduleJob('0 * 0-7,19-23 * * 1-5', function(){


}

module.exports = { 
    run: run
}
