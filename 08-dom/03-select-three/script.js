// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    items = document.getElementsByClassName("target");
    for (let val in items) {
        document.getElementsByClassName("target")[val].innerText = "owned ";
    }

})();