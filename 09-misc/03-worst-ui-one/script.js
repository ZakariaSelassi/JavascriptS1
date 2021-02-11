// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let targetValue = document.getElementById("target");
    let slide = document.getElementById("slider");
    let c = slide.textContent;
    console.log(c);
    document.getElementById("slider").addEventListener("input", () => test());

    function test() {
        targetValue.innerHTML = slide.value;
    }


})();