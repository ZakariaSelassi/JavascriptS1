// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {

    let person = {
        firstname: "Zakaria",
        lastname: "Selassi",
        age: 23,
        city: "Charleroi",
        country: "Belgium"
    };

    // your code here
    document.getElementById("run").addEventListener("click", () => myFunction());

    function myFunction() {

        console.table(person);
    }
})();