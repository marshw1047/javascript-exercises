const removeFromArray = function(array, ...num) {
    const finalArray = [];
    const nums = Array.from(num);

    for (const index of array) {
        if (nums.includes(index)) {
            continue;
        }
        finalArray.push(index);
    }
    
    return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
