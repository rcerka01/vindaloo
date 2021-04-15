const conf = require("../config/config");
const moment = require('moment');

async function insertListing(client, strategyId, symbol, account, type) {
    const timestump = Date.now();
    const time = moment().format();
    const trade = {
        timestump,
        time,
        strategyId,
        symbol,
        account,
        type
    }

    const result = await client.db(conf.db.name).collection("mfTrades")
        .insertOne(trade);
};

//async function findOneListing(client, query) {
//     const result = await client.db(conf.db.name).collection("mfParameters")
//         .findOne(query);
//     return result;     
// };




async function insertTrade(client, strategyId, symbol, account, type) {
    try {
        await  insertListing(client, strategyId, symbol, account, type);
    } catch (e) {
        console.error(e);
    }
}

// async function findListings(client, query, projection) {
//     const results = client.db(conf.db.name).collection("mfParameters")
//         .find(query, projection)
//         .sort( { _id: 1 } );
//     return results;     
// };

// async function findById(client, id) {
//     const query = { _id: id };
//     try {
//         const result = await findOneListing(client, query);
//         return result;
//     } catch (e) {
//         console.error(e);
//     }
// }

module.exports = {
    insertTrade: insertTrade
}
