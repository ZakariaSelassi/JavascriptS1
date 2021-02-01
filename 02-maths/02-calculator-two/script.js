// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;
        switch (operation) {
            case 'addition':
                let sum = one + two;
                alert("result :" + sum);
                break;
            case 'substraction':
                let sub = one - two;
                alert("result :" + sub);
                break;
                division
            case 'multiplication':
                let mult = one * two;
                alert("result :" + mult);
                break;
            case 'division':
                let div = one / two;
                alert("result :" + div);
                break;
            default:
                alert("something wrong!");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
            console.log(Array)
        ),

    );

})();