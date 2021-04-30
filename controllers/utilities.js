var _ = require('lodash');

function mapToArray(map) {
    let arr = [];
    for (let [key, value] of map) {
        arr.push({key, value})
    };   
    return arr;
}

function isMatchAND(st, params) {
    let flag;
    for (const s of st) {
        flag = false;
        params.forEach(p => {
            if (_.isEqual(s, p)) { flag = true; };
        })
        if (!flag) { break; }
    };
    return flag;
}

function isMatchOR(st, params) {
    let flag;
    for (const s of st) {
        flag = false;
        params.forEach(p => {
            if (_.isEqual(s, p)) { flag = true; };
        })
        if (flag) { break; }
    };
    return flag;
}

module.exports = {
    isMatchAND: isMatchAND,
    isMatchOR: isMatchOR,
    mapToArray: mapToArray
}
