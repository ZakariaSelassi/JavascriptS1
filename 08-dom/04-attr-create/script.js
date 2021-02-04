// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {
    /**Get the value of the "data-image" attribute from the element with id "source". Create a new image element inside the target element that displays the image referred to by the attribute value. Then remove the original element. */
    // your code here

    let first = document.getElementById("source");

    let cop = first.dataset.image;
    console.log(cop);
    let myImage = document.createElement("IMG");
    myImage.setAttribute("src", cop);
    document.querySelector("#target").appendChild(myImage);



})();