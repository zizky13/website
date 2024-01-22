// rest parameter do the opposite of spread operator

rollDice = () => {
    const numOfDice = document.getElementById("numOfDice").value; //catching value inputted by user in input HTML
    const diceResult = document.getElementById("diceResult"); //catching value of current dice result
    const diceImages = document.getElementById("diceImages"); //catching value of current dice image
    const values = []; //array to hold randomized value
    const images = []; //array to hold dice face images

    for(let i = 0; i < numOfDice; i++){//iterating by number of dices inputted by user
        const value = Math.floor(Math.random() * 6) + 1; //randomize number from 1 to 6, save it to value
        values.push(value); //pushing the randomized number to the array
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`); //pushing the image to array according to the value resulted
    }

    diceResult.textContent = `dice:${values.join(', ')}`; //printing dice result according to value received
    diceImages.innerHTML = images.join(''); //printing the images
}