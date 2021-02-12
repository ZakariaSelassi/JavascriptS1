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
        let targetValue = document.getElementById("target");
        let btn1 = document.getElementById("part-one");
        let btn2 = document.getElementById("part-two");
        let btn3 = document.getElementById("part-three");
        let btn4 = document.getElementById("part-four");
        let rm = "460",
            rm2 = "00",
            rm3 = "00",
            rm4 = "00";
        document.getElementById("part-one").addEventListener("click", () => myfunction());
        document.getElementById("part-two").addEventListener("click", () => myfunction2());
        document.getElementById("part-three").addEventListener("click", () => myfunction3());
        document.getElementById("part-four").addEventListener("click", () => myfunction4());

        function myfunction() {
            rm = Math.floor(Math.random() * (490 - 460)) + 460;
            btn1.innerHTML = rm;

            targetValue.innerHTML = rm + "" + rm2 + "" + btn3 + "" + btn4;
        }

        function myfunction2() {
            rm2 = Math.floor(Math.random() * (90 - 0)) + 0;
            btn1.innerHTML = rm2;

            targetValue.innerHTML = rm + "" + rm2 + "" + btn3 + "" + btn4;
        }




    })();
})();