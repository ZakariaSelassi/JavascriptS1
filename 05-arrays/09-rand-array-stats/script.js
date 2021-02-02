// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {



    // your code here
    document.getElementById("run").addEventListener("click", () => MyArray());

    function MyArray() {
        let n;
        let stock = [];
        let sum = 0;
        let average = 0;
        let array = document.querySelectorAll("table tr td");
        for (let i = 0; i < array.length; i++) {
            n = Math.floor(Math.random() * (100 - 1) + 1);
            array[i].innerHTML = n;
            sum += n;
            average = sum / array.length;
            stock.push(n);
        }
        console.log(stock);

        document.getElementById("min").innerHTML = Math.min(...stock);
        document.getElementById("max").innerHTML = Math.max(...stock);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
    }
})();