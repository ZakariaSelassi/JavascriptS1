// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener("input", myFunction);

    function myFunction() {
        let count = document.getElementById("pass-one").value.length;
        let max_lengts = 10;
        if (count <= max_lengts) {
            document.getElementById("counter").innerText = count;
        }

        if (count > max_lengts) {
            document.getElementById("pass-one").setAttribute("maxlength", max_lengts);
        }

    }



})();