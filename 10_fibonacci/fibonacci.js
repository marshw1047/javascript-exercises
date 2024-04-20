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

//NOTE: Doing with array.
//      const fib = [0, 1];
//      for (let i = 2; i <= count; i++) {
//          fib[i] = fib[i - 1] + fib[i - 2];
//      }
//      return fib[count];

// Do not edit below this line
module.exports = fibonacci;
