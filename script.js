// Assignment code here
// TODO: create criteriaPrompts function
// prompt user for password length (between 8 and 128), validate and return value
function getPasswordLength() {
    // variable for password length input

    // request valid input while passwordLength is outside 8-128 range or NaN
        // use Number(passwordLength) to change string input to number

    // return valid length choice
    return;
}

// prompt user to confirm use of character types and return object with charTypeName: boolean attributes
function getCharTypes() {
    // charTypes object

    // confirm lowercase, add choice to object

    // confirm uppercase, add choice to object

    // confirm numeric, add choice to object

    // confirm special, add choice to object

    // return charTypes
    return;
}

// TODO: create generatePassword function
// generate password based on user choices
function generatePassword() {
    // get password length from user

    // get character types to be used from user

    // create object with arrays of characters for each chosen char type

    // generate password using given criteria
    
    // return password
    return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);