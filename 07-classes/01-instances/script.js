// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => myFunction());

    function myFunction() {
        let myCat1 = new Cat("Skitty", 9);
        let myCat2 = new Cat("Pixel", 6);

        console.log(myCat1.name + " " + myCat1.age + " years");
        console.log(myCat2.name + " " + myCat2.age + " years");
    }

})();