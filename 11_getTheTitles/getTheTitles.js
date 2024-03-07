const getTheTitles = function (books) {
    const titles = [];

    // for (b of books) {
    //     titles.push(b.title);
    // }
    books.forEach((book) => titles.push(book.title));

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
