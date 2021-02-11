// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener("input", myFunction);

    function myFunction() {
        let input = document.querySelector('input');
        let target = document.getElementById('validity');
        let max_length = 10;
        console.log(input.value);
        var passw = /^(?=.*\d+)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
        if (input.value.length <= max_length - 1 && input.matches(passw)) {
            document.getElementById("validity").innerHTML = "ok";
            return true;
        } else {
            alert('Wrong...!');
            return false;
        }



    }
})();