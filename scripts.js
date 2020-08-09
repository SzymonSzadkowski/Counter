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
        // set color based on value

        if (count < 0) {
            value.style.color = "red";
        } else if (count === 0) {
            value.style.color = "black";
        } else if (count > 0) {
            value.style.color = "green";
        }
    })
})