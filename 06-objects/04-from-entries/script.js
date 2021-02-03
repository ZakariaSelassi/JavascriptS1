// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => myFunction());
    /**Lorsque l'on clique sur le bouton, on affiche dans la console les clés et les valeurs d'un objet créé à l'aide des tableaux . */
    function myFunction() {

        let array = values.entries(values, keys);
        let array2 = keys.entries(keys, values);
        for (let value of array) {
            console.table(value);
        }
        for (let value of array2) {
            console.table(value);
        }

    }


})();