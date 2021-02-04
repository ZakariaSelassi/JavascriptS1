// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => myFunction());
    /**Lorsque l'on clique sur le bouton, on affiche dans la console les clés et les valeurs d'un objet créé à l'aide des tableaux . */
    function myFunction() {

        const myMap = new Map();
        for (let i = 0; i < keys.length; i++) {
            myMap.set(keys[i], values[i]);

        }
        console.log(myMap);
        let myObject = Object.fromEntries(myMap);
        console.log(myObject);
    }


})();