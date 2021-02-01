// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let myNumbers = document.getElementById("numbers").value;
        console.log(myNumbers);

        let trier = myNumbers.split(",").sort((a, b) => a - b);
        console.log(trier);

        document.getElementById("numbers").value = trier;


    });

})();