const getTheTitles = function(books) {
    // const titleArray = [];

    // for (let book of books) {
    //     titleArray.push(book.title);
    // }

    // return titleArray;
    return books.map(book => book.title);
};

//first thing is input/output
//  so input is an array of objects with properties/keys, output is an array
//  iterate through input array using for ... in
//  instantiate the new array
//  can add by using array.push(books.title)
// Do not edit below this line

// LESSONS LEARNED DIFF BETWEEN FOR..IN and FOR..OF
// ALSO JUST USE .map()
// return books.map((book) => book.title);
module.exports = getTheTitles;
