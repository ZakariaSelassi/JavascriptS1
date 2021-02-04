// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let first = document.querySelector("img");
    let src = first.src;
    console.log(src);
    let cpt = 0;

    document.getElementById("next").addEventListener("click", function() {

        if (cpt >= gallery.length - 1) {
            cpt = 0;
        }

        first.src = gallery[cpt];
        cpt = cpt + 1;

    });

    // your code here



})();