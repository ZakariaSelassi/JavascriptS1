// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let x = Math.floor(Math.random() * (100 - 1)) + 1;
    //alert(x);
    let enter;
    let cpt = 0;
    while (enter != x) {
        enter = prompt("Guess number ! ", "Enter correct number");
        cpt++;
        if (enter < x) {
            alert("Higher");
        } else if (enter > x) {
            alert("lower");
        } else if (enter == x) {
            alert("That's good guess ! " + cpt);
        }

    }



})();