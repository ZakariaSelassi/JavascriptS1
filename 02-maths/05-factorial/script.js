// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let num = document.getElementById("number").value;

        if (num < 0) {
            return 0;
        } else if (num == 0) {
            return 1;
        } else {
            return alert(num * (num - 1));
        }

    });

})();