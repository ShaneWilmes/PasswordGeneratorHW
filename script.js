// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "X", "Y", "Z"];
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = [" ", ",", "<", ".", ">", "/", "?", ";", ":", "'", "[", "{", "]", "}", "|", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",];


// Write password to the #password input
function writePassword(password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// generatePassword() generates random password 
function generatePassword() {

    // Getting password length and character types from user
    const passwordLength = getPasswordLength();
    const passwordCharacterList = getPasswordCharacterList() || [];

    if (!isListValid(passwordCharacterList.length)) {
        return
    }

    var password = "";

    for (let index = 0; index < passwordLength; index++) {
        password += passwordCharacterList[Math.floor(Math.random() * passwordCharacterList.length)];

    }

    writePassword(password);

};

function isListValid(listLength) {
    if (listLength < 1) {
        alert("You must select a character type")

        return false;

    } else {
        return true;
    }
}

//Getting password length from user
function getPasswordLength() {

    var passwordLength = window.prompt("Password Length:  Please enter a number between 8 and 128.");

    if (passwordLength < 8) {
        window.alert("Password must be at least 8 characters!");
        getPasswordLength();

    }

    if (passwordLength > 128) {
        window.alert("Password must be less than 128 characters!")
        getPasswordLength();
    }

    return passwordLength;
};


// Setting character types
function getPasswordCharacterList() {

    const passwordCharacterList = [];

    var lowercaseOption = confirm("Would you like lower case letters?");

    if (lowercaseOption) {
        passwordCharacterList.push.apply(passwordCharacterList, lowerCaseChars);
    }


    var uppercaseOption = confirm("Would you like upper case letters?");

    if (uppercaseOption) {
        passwordCharacterList.push.apply(passwordCharacterList, upperCaseChars);
    }
    var numbersOption = confirm("Would you like numbers?")

    if (numbersOption) {
        passwordCharacterList.push.apply(passwordCharacterList, numberChars);
    }

    var specialOption = confirm("Would you like special characters?");

    if (specialOption) {
        passwordCharacterList.push.apply(passwordCharacterList, specialChars);
    }

    return passwordCharacterList

}; 