// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let text = document.getElementById("target");
    console.log(text);
    let stringT = text.textContent;
    text.innerHTML = " ";
    console.log(stringT);
    let cpt = 0;


    function typeWriter() {
        let nb = Math.floor(Math.random() * (1000 - 1)) + 1;
        console.log(nb);
        if (cpt < stringT.length) {
            document.getElementById("target").innerHTML += stringT.charAt(cpt); // chartAt : a chaque fois qu'un lettre est parcourur renvoie une nouvelle chaine containant le caractere
            cpt++;
            setTimeout(typeWriter, nb);
        }
    }

    window.onload = typeWriter;
})();