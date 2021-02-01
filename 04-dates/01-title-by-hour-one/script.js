// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let endDay = new Date();
    endDay.setDate(18, 0, 0);
    if (endDay <= 18) {
        document.getElementById("target").innerHTML = "Good Evening";
    } else {
        document.getElementById("target").innerHTML = "Hello";
    }

})();