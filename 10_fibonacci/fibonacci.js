const fibonacci = function (n) {
    num = parseInt(n);
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }

    let f0 = 0;
    let f1 = 1;
    let f2 = 0;

    for (let i = 1; i < num; ++i) {
        f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
    }

    return f2;
};

// Do not edit below this line
module.exports = fibonacci;
