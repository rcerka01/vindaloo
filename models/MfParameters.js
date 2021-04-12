const conf = require("../config/config");
const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;

const uri = conf.db.test.uri;
const client = new MongoClient(uri, { useUnifiedTopology: true } );

async function connectDb() {
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }
};
connectDb();

async function upsertListing(client, strategyId, symbol, account, parameters) {
    const arg = createUpsertItem(strategyId, symbol, account, parameters);

    const result = await client.db(conf.db.name).collection("mfParameters")
        .updateOne(arg.upsertKey, arg.upsertValue, arg.upsert);
};

function createUpsertItem(strategyId, symbol, account, parameters) {

    const upsertKey = { _id: strategyId + "-" + symbol + "-" + account }

    const timestump = Date.now();
    const time = moment().format();

    let parametersFromMap = [];

    for (let [key, value] of parameters) {
        parametersFromMap.push({ key, value });
    }

    const upsertValue = {
        $push: { 
            values: { 
                $each: [{
                    timestamp: timestump,
                    time: time,
                    parameters: parametersFromMap
                }],
                $position: 0
            }
        }
    } 

    const upsert = { upsert: true };

    return { upsertKey, upsertValue, upsert };
}


async function upsertParameters(strategyId, symbol, account, parameters) {
    try {
       // await client.connect();
        await  upsertListing(client, strategyId, symbol, account, parameters);
    } catch (e) {
        console.error(e);
    } finally {
      //  await client.close();
    }
}

module.exports = { 
    upsertParameters: upsertParameters
}
