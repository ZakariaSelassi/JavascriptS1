// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener("change", myFunction);

    function myFunction() {
        let input = document.querySelector('input');
        let target = document.getElementById('validity');

        console.log(input.value);
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (input.value.match(passw)) {
            alert('Correct, try another...');
            return true;
        } else {
            alert('Wrong...!');
            return false;
        }


    }
})();