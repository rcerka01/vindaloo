const conf = require("../config/config");
const moment = require('moment');

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


async function upsertListing(client, strategyId, symbol, account, parameters) {
    const arg = createUpsertItem(strategyId, symbol, account, parameters);

    const result = await client.db(conf.db.name).collection("mfParameters")
        .updateOne(arg.upsertKey, arg.upsertValue, arg.upsert);
};

async function findOneListing(client, query) {
    const result = await client.db(conf.db.name).collection("mfParameters")
        .findOne(query);
    return result;     
};

async function findListings(client, query, projection) {
    const results = client.db(conf.db.name).collection("mfParameters")
        .find(query, projection)
        .sort( { _id: 1 } );
    return results;     
};

async function deleteListing(client, query) {
    const result = await client.db(conf.db.name).collection("mfParameters")
        .deleteOne(query);
    return result;     
};

//

async function upsertParameters(client, strategyId, symbol, account, parameters) {
    try {
        await  upsertListing(client, strategyId, symbol, account, parameters);
    } catch (e) {
        console.error(e);
    }
}

async function findById(client, id) {
    const query = { _id: id };
    try {
        const result = await findOneListing(client, query);
        return result;
    } catch (e) {
        console.error(e);
    }
}

async function findAll(client) {
    try {
        const results = await findListings(client, {}, { _id: 1, values: 0 });
        return results;
    } catch (e) {
        console.error(e);
    }
}

async function findAllCurrentFactors(client) {
    let factors = new Map();

    try {
        const results = await findListings(client, {}, {});

        await results.forEach( doc => {
            const arr = doc._id.split("-");
            const key = arr[1] + "-" + arr[0];
            const pars = doc.values[0];
            pars.parameters.forEach(par => {
                const factorKey = key + "_" + par.key;
                const factorValue = par.value;
                factors.set(factorKey, factorValue);
            });
        });
        return factors;
    } catch (e) {
        console.error(e);
    }
}

async function deleteById(client, id) {
    try {
        const results = await deleteListing(client, { _id: id });
        return results;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    upsertParameters: upsertParameters,
    findById: findById,
    findAll: findAll,
    findAllCurrentFactors: findAllCurrentFactors,
    deleteById: deleteById
}
