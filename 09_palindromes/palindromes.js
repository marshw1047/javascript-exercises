const palindromes = function (string) {

    function isAlphanumeric(char) {
        return /[a-z0-9]/.test(char);
    }
    const filteredString = string
        .toLowerCase()
        .split('')
        .filter(isAlphanumeric)
        .join('');

    const reverseString = filteredString.split('').reverse().join('');

    return filteredString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
