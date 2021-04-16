const conf = require("../config/config");
const moment = require('moment');

async function insertListing(client, strategyId, symbol, account, description) {
    const timestump = Date.now();
    const time = moment().format();
    const msg = {
        timestump,
        time,
        strategyId,
        symbol,
        account,
        description
    }

    const result = await client.db(conf.db.name).collection("Errors")
        .insertOne(msg);
};

// async function findListings(client, query, projection) {
//     const results = client.db(conf.db.name).collection("mfTrades")
//         .find(query, projection)
//         .sort( { _id: -1 } );    
//     return results;     
// };

//
async function insertError(client, strategyId, symbol, account, description) {
    try {
        await  insertListing(client, strategyId, symbol, account, description);
    } catch (e) {
        console.error(e);
    }
}

// async function find(client, strategy, symbol, account) {
//     const query = {
//         $and: [
//           {
//             strategyId: strategy
//           },
//           {
//             symbol: symbol
//           },
//           {
//             account: account
//           }
//         ]
//       };

//     const projection = {};

//     try {
//         const result = await findListings(client, query, projection);
//         return result;
//     } catch (e) {
//         console.error(e);
//     }
// }

module.exports = {
    saveError: insertError,
  //  find, find
}
