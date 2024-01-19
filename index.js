// COUNTER PROGARM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = increase = () => {
    count = Math.floor((Math.random() * 100) + 1);
    countLabel.textContent = count;
}

decreaseBtn.onclick = decrease = () => {
    count = Math.floor((Math.random() * -100) - 1);
    countLabel.textContent = count;
}

resetBtn.onclick = reset = () => {
    count = 0;
    countLabel.textContent = count;
}