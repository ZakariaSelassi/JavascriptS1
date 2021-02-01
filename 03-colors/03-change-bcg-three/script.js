// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        // perform an division
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color = color + letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = color;
    });

})();