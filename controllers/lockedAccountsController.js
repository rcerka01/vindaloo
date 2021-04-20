const config = require("../config/config");
const lockedAccountsModel = require("../models/LockedAccounts");

let lockedAccounts = [];

function getAllAccountsFromConfig() {
    // get non multiples accounts
    let accounts = [];
    config.login.forEach(acc => accounts.push(
        {
            _id: acc.id,
            isLocked: false,
            isMultiple: false
        }
    ));
    // get multiples accounts
    config.multiples.forEach(acc => accounts.push(
        {
            _id: acc.id,
            isLocked: false,
            isMultiple: true
        }
    ));
    return accounts;
}

async function synchronizeDbToConfig(dbClient) {
    const lockedAccountsFromDb = await lockedAccountsModel.getAllLockedAccounts(dbClient);
    const lockedAccountsFromConfig = getAllAccountsFromConfig();

    let idsFromConfig = [];
    lockedAccountsFromConfig.forEach( accountFromConfig => {
        idsFromConfig.push(accountFromConfig._id);
    });

    let idsFromDb = [];
    await lockedAccountsFromDb.forEach(accountFromDb => {
        idsFromDb.push(accountFromDb._id);
        if (!idsFromConfig.includes(accountFromDb._id)) {
            lockedAccountsModel.deleteAccount(dbClient, accountFromDb._id)
        } 
    });

    idsFromConfig.forEach( id => {
        if (!idsFromDb.includes(id)) {
            let insertItem = lockedAccountsFromConfig.find( item => item._id === id);
            lockedAccountsModel.insertAccount(dbClient, insertItem)
        }
    });
}

async function setLockedAccounts(dbClient) {
    const lockedAccountsFromDb = await lockedAccountsModel.getAllLockedAccounts(dbClient);
    lockedAccounts = [];
    lockedAccountsFromDb.forEach( account => {
        if (account.isLocked) { lockedAccounts.push( account._id ) }
    });
}

async function lock(dbClient, account) {
    await lockedAccountsModel.updateAccount(dbClient, account, { isLocked: true });
    setLockedAccounts(dbClient);
}

async function unlock(dbClient, account) {
    await lockedAccountsModel.updateAccount(dbClient, account, { isLocked: false });
    setLockedAccounts(dbClient);
}

function getLockedAccounts() { return lockedAccounts; }

function isLockedAccount(account) {
    return getLockedAccounts().includes(account);
}

module.exports = { 
    synchronizeDbToConfig: synchronizeDbToConfig,
    setLockedAccounts: setLockedAccounts,
    lock: lock,
    unlock: unlock,
    getLockedAccounts: getLockedAccounts,
    isLockedAccount: isLockedAccount
}