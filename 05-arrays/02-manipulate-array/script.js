// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => MyArray(fruits));

    function MyArray() {

        /*Supprime premier element */
        fruits.shift();
        /*Supprime last element */
        fruits.pop();

        fruits.unshift("banana");
        fruits.push("kiwi");
        console.log(fruits);
    }
})();