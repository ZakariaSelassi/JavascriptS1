// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let sum = one + two;
        return alert("le resultat : " + sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let sub = one - two;
        return alert("le resultat : " + sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let mul = one * two;
        return alert("le resultat : " + mul);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        let div = one / two;
        return alert("le resultat : " + div);
    });
})();