//keep test accounts locked
const testAccounts = [9999];
const lockedMultipleAccounts = [];
const lockedDemoAccounts = [];
const lockedRealAccounts = [];

const lockedAccounts = 
    testAccounts
        .concat(lockedMultipleAccounts
            .concat(lockedDemoAccounts
                .concat(
                    lockedRealAccounts
                )
            )
        );

module.exports = {
    accounts: lockedAccounts
}
