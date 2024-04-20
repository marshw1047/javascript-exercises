const fibonacci = function(nth) {
    nth = Number(nth);
    
    if (nth < 0) {
        return "OOPS";
    }

    switch (nth) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            let nthSum = 0;
            let a = 0;
            let b = 1;
            for (i = 2; i <= nth; i++) {
                nthSum = a + b;
                a = b;
                b = nthSum;
            }
            return nthSum;
    }


};

// Do not edit below this line
module.exports = fibonacci;
