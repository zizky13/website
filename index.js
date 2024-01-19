// COUNTER PROGARM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = increase = () => {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = decrease = () => {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = reset = () => {
    count = 0;
    countLabel.textContent = count;
}