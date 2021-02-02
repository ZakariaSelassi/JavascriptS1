// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let today = new Date(Date.now());
    console.log(today.toDateString());
    //let today = now.getFullYear() + " - " + (now.getMonth() + 1) + " - " + now.getDate() + " " + now.getHours;
    document.getElementById("target").innerHTML = today;
})();