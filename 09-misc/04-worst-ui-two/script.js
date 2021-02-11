// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker
/**    let targetValue = document.getElementById("target");
    let slide = document.getElementById("slider");
    let c = slide.textContent;
    console.log(c);
    document.getElementById("slider").addEventListener("input", () => test());

    function test() {
        targetValue.innerHTML = slide.value;
    }
 */

(() => {

    // your code here
    let targetValue = document.getElementById("target");

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(btn);
            let min = btn.dataset.min;
            let max = btn.dataset.max;

            if (min < max) {
                btn.innerHTML = min;
                min++;
            }



        });



    });


})();