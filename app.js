const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const value = document.getElementById("value");
let number = 0;

function decrease() {
    number--;
    value.textContent = number;
    value.style.color = "hsl(360, 67%, 44%)";

    if (number > 0) {
        value.style.color = "hsl(125, 67%, 44%)";
    }

    if (number === 0) {
        value.style.color = "hsl(209, 61%, 16%)";
    }

}

decreaseBtn.addEventListener("click", decrease);

function increase() {
    number++;
    value.textContent = number;
    value.style.color = "hsl(125, 67%, 44%)";

    if (number < 0) {
        value.style.color = "hsl(360, 67%, 44%)";
    }

    if (number === 0) {
        value.style.color = "hsl(209, 61%, 16%)";
    }

}

increaseBtn.addEventListener("click", increase);

function reset() {
    value.textContent = 0;
    value.style.color = "hsl(209, 61%, 16%)";
    number = 0;
}

resetBtn.addEventListener("click", reset);