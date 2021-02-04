// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get Name() {
            return this.firstname + " " + this.lastname;
        }
        set Name(values) {
            this.firstname = values;
            this.lastname = values;
        }
    }

    document.getElementById("run").addEventListener("click", () => myFunction());

    function myFunction() {
        let myPerson = new Person("Pixels", "Art");

        console.log(myPerson.Name);
    }

})();