// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => myFunction());

    function myFunction() {
        let n;
        let array = [...adjectives];

        n = birds[Math.floor(Math.random() * birds.length)];
        array = array[Math.floor(Math.random() * array.length)];
        console.log(n);
        console.log(array);

        document.getElementById("target").innerHTML = n.name + " " + array;

    }
})();