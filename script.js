// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword() generates random password 
function generatePassword() {

    var password = "";
    var passwordLength = 8;
    var passwordCharacterList = [];

    // Getting password lenth and character types from user
    passwordLength = getPasswordLength();
    passwordCharacterList = getPasswordCharacterList();


    var index = 0;
    for (let i = 0; i < passwordLength; i++) 
    {
        index = Math.floor(math.random() * passwordCharacterList.length);  //Confirming password is 8 characters and radomizing out put  
        password += passwordCharacterList[index];
    }

    return password; 
};

//Getting password length from user
function getPasswordLength() {
    
    var length = window.prompt("Password Length:  Please enter a number between 8 and 128.");

    if (!lengthValidation(length)) {

        length = passwordLength();

    }

    return length;

};

function characterTypes() {

    var enterType = window.prompt("Would you like to include special caharacters?");

    if (enterType) {
        characterTypes();
    
    } 
    
};

// Setting character types
function getPasswordCharacterList() {

    const lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "X", "Y", "Z"];
    const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialChars = [" ", ",", "<", ".", ">", "/", "?", ";", ":", "'", "[", "{", "]", "}", "|", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",];

    //Sets to empty
    var passwordCharacterList = [];

    var userInput = confirm("Would you like lower case letters?");
    addToPasswordCharacterList(lowerCaseChars);

    userInput = confirm("Would you like upper case letters?");
    getPasswordCharacterList(upperCaseChars);

    userInput = confirm("Would you like numbers?");
    getPasswordCharacterList(numberChars);

    userInput = confirm("Would you like special characters?");
    getPasswordCharacterList(specialChars);    
}


function addToPasswordCharacterList(charsList); {
    
    if(userInput) {
        
        passwordCharacterList = passwordCharacterList.concat(charsList);
    }    

    }











