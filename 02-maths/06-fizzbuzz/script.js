// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    let n;
    // your code here
    for (let i = 0; i < 100; i++) {
        n = Math.floor(Math.random() * (100 - 1) + 1);
        if (n % 3) {
            console.log("fizz" + n);
        } else if (n % 5) {
            console.log("buzz" + n);
        } else if (n % 3 == 0 && n % 5 == 0) {
            console.log("fizzbuzz" + n);
        }
    }

})();