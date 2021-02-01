// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        // perform an division
        let myColor = document.getElementById("color").value;
        document.body.style.backgroundColor = myColor;
        return console.log(myColor);
    });
})();