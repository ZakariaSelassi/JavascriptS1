// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal {
        static greeting = "Miaou";
        constructor(name) {
            super(name);
            this.name = name;
        }
    }
    class Dog extends Animal {
        static greeting = "Wouaf";
        constructor(name) {
            super(name);
            this.name = name;
        }
    }
    // your code here
    let myCat = new Cat("Pixels");
    console.log(myCat.sayHello());
    let myDog = new Dog("Gradiant");
    console.log(myDog.sayHello());
})();