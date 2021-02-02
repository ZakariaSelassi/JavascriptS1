// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let endDay = new Date();
    endDay.setDate(9, 0, 0);
    if (endDay >= 9) {
        document.getElementById("target").innerHTML = "Good Evening";
    } else {
        document.getElementById("target").innerHTML = "Hello";
    }

})();