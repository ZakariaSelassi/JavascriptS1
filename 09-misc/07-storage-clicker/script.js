// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {
    let targetValue = document.getElementById("target");
    let cpt = localStorage.getItem("compteur");

    // your code here
    document.getElementById("increment").addEventListener("click", () => {
        cpt++;
        localStorage.setItem("compteur", cpt);
        targetValue.innerHTML = cpt;



    });
})();