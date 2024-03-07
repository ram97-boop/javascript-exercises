const palindromes = function (str) {
    const noSpecialCharArray = str
        .split("")
        .filter((c) => c.match(/[0-9a-z]/i))
        .map((c) => c.toLowerCase());

    const reversed = [...noSpecialCharArray] // make a copy
        .reverse();

    return reversed.join("") === noSpecialCharArray.join("");
};

// Do not edit below this line
module.exports = palindromes;
