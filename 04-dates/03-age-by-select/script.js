// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let birthDay = new Date(year, month - 1, day);
        let now = new Date();
        let age = now.getFullYear() - birthDay.getFullYear();
        return console.log(birthDay.toDateString() + " age : " + age--);
    });

})();