//random password generator

let passwordLength = 0;
let includeLowercase = false;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;

generateCheck = () => {
    passwordLength = document.getElementById("passwordLength").value;

    if (useLowercaseCheck.checked) {
        includeLowercase = true;
    } else {
        includeLowercase = false;
    }

    if (useUppercaseCheck.checked) {
        includeUppercase = true;
    } else {
        includeUppercase = false;
    }

    if (useNumbersCheck.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }

    if (useSymbolsCheck.checked) {
        includeSymbols = true;
    } else {
        includeSymbols = false;
    }

    generatePassword = (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) => {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolsChars = "!@#$%^&*()_+-=[]\;',./{}|:<>?";

        let allowedChars = "";
        let password = "";


        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolsChars : "";

        if (length <= 0) {
            return '(password length must be at least 1';
        }

        if (allowedChars.length === 0) {
            return `(Atleast 1 set of characters needs to be selected)`;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];

        }

        return password;
    }

    const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
    generatedPassword.textContent = `Your generated password is: ${password}`;

}






