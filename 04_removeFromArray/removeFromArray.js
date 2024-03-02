const removeFromArray = function (array, ...items) {
    console.log(items);
    let result = [...array]; // make a copy
    let idx;
    for (const item of items) {
        // while there's still 'item' in the array.
        while ((idx = result.indexOf(item)) >= 0) {
            result.splice(idx, 1);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
