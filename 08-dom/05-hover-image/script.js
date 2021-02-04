// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let myImg = document.querySelector("img");
    console.log(myImg);
    let src = myImg.src;
    let cop = myImg.dataset.hover;
    myImg.addEventListener('mouseover', function() {
        myImg.src = cop;
    });
    myImg.addEventListener('mouseout', function() {
        myImg.src = src;
    })
})();