// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => MyArray());



    function MyArray() {
        /*first methode */
        //let cleanArray = [...new Set(fruits)];
        //console.log(cleanArray);
        /* seconde methode */
        let clean = [];
        fruits.forEach(element => {
            if (!clean.includes(element)) {
                clean.push(element);
            }
        })
        console.log(clean);
    }
})();