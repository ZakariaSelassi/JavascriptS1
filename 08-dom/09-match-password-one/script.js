// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => myFunction());

    function myFunction() {
        // recup premiere valeur 
        let firstValue = document.getElementById("pass-one").value;

        let secondValue = document.getElementById("pass-two").value;
        console.log(document.querySelectorAll("input"));
        let myVar = document.querySelectorAll("input");

        if (firstValue !== secondValue || firstValue == "" || secondValue == "") {
            alert("Password aren't the same ! ");
            for (let i = 0; i < myVar.length; i++) {
                myVar[i].style.borderColor = "red";
            }
        } else {
            console.log("Value are the same ! ");
            console.log(" first " + firstValue + " " + "second " + secondValue);
            for (let i = 0; i < myVar.length; i++) {
                myVar[i].style.borderColor = "silver";
            }
        }

    }




})();