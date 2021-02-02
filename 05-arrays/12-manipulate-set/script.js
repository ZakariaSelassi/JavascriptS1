// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => MyArray());


    function MyArray() {

        let mySet = new Set();
        mySet = fruits;
        mySet.delete("apple");
        mySet.delete("cherry");
        mySet.add("Banana").add("Kiwi");
        console.log(mySet);

    }

})();