// set initial value of count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const button = event.currentTarget.classList;
        if (button.contains("decrease")) {
            count--;
        } else if (button.contains("increase")) {
            count++;
        } else if (button.contains("reset")) {
            count = 0;
        }
        value.textContent = count;
    })
})