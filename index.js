//receiving input using html textbox
document.getElementById("mySubmit").onclick = clicked = () => {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}`;
}