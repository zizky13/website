// rest parameter do the opposite of spread operator

openArmory = (...weapons) => {
    console.log(...weapons);
}

const weapon1 = "knife";
const weapon2 = "sword";
const weapon3 = "rifle";
const weapon4 = "magic orb";
const weapon5 = "broadsword";

openArmory(weapon1,weapon2,weapon3,weapon4,weapon5);
// you can use rest to combine strings

combineStrings = (...strings) => {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob","Squarepants","III");
console.log(fullName);