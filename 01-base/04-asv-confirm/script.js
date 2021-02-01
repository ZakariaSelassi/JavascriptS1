// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

let myAge = prompt("Enter your age ? ", "23 year old");
let myGender = prompt("Enter your gendenr ", "Men or Women");

let myTown = prompt("Enter your town", "City");

alert("Your information : " + myAge + " " + myGender + " " + myTown);
if (confirm("Do you wants to confirme ?")) {
    alert("You have confirmed");
} else {

    myAge = prompt("Enter your age ? ", "23 year old");
    myGender = prompt("Enter your gendenr ", "Men or Women");

    myTown = prompt("Enter your town", "City");

}