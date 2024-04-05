const repeatString = function(input, repeat) {
    let output = "";
    if (repeat < 0) {
        return 'ERROR';
    }
    
    for (let i = 0; i < repeat; i++) {
        output += input;
    }

    return output;

};

// Do not edit below this line
module.exports = repeatString;
