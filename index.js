const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const myReset = document.getElementById("myReset");

mySubmit.onclick = submitClicked = () => {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`
    } else {
        subResult.textContent = `You are not subscribed!`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa!`;
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Master Card!`;
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal!`;
    } else {
        paymentResult.textContent = `You must select a payment type!`;
    }
}

myReset.onclick = resetClicked = () => {
    if (visaBtn.checked || masterCardBtn.checked || payPalBtn.checked || myCheckBox.checked) {
        document.getElementById("myCheckBox").checked = false;
        document.getElementById("visaBtn").checked = false;
        document.getElementById("masterCardBtn").checked = false;
        document.getElementById("payPalBtn").checked = false;
    }
}