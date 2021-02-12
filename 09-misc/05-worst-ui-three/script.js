// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
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


        let min = document.querySelector("input").dataset.min;
        let max = document.querySelector("input").dataset.max;


        document.getElementById("fix-part-one").addEventListener("click", () => {
            let n = Math.floor(Math.random() * (max - min)) + min;
            let n2 = Math.floor(Math.random() * (460 - 490)) + 490;
            console.log(n2);
            console.log(n);
            //let targ = document.getElementById("part-one").value = n;
            //console.log(targ.value);
        });

    })();
})();