const sumAll = function (n1, n2) {
    let sum = 0; // initialize as a number
    let smaller;
    let bigger;

    if (
        n1 < 0 ||
        n2 < 0 ||
        (typeof n1) != "number" ||
        (typeof n2) != "number"
    ) {
        return "ERROR";
    }

    if (n1 >= n2) {
        smaller = n2;
        bigger = n1;
    }
    else {
        smaller = n1;
        bigger = n2;
    }

    for (let n = smaller; n <= bigger; ++n) {
        sum += n;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
