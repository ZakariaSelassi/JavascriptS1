// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => MyArray());

    function MyArray() {

        let n = fruits.includes("apple");
        if (n === true) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }
})();