// Assignment code here
// TODO: create criteriaPrompts function
// prompt user for password length (between 8 and 128), validate and return value
function getPasswordLength() {
    // variable for password length input
    var passwordLength;

    // request valid input while passwordLength is outside 8-128 range or NaN
    passwordLength = prompt("Please enter a whole number for the length of your password between 8 and 128.")
    
    // validate user input
    while (passwordLength < 8 || passwordLength > 128 || Number.isNaN(Number(passwordLength))) {
        // console.log(Number(passwordLength));
        passwordLength = prompt("Make sure to enter a whole number (no decimals) between 8 and 128.");
    }

    // use Number(passwordLength) to change string input to number and return
    return Number(passwordLength);
}

// prompt user to confirm use of character types and return object with charTypeName: boolean attributes
function getCharTypes() {
    // function for confirm prompts
    function confirmTypes() {
        // confirm lowercase, add choice to object
        charTypes.confirmLower = confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes, 'Cancel' for no.");
        // confirm uppercase, add choice to object
        charTypes.confirmUpper = confirm("Would you like to include uppercase letters in your password? Click 'OK' for yes, 'Cancel' for no.");
        // confirm numeric, add choice to object
        charTypes.confirmNums = confirm("Would you like to include numbers in your password? Click 'OK' for yes, 'Cancel' for no.");
        // confirm special, add choice to object
        charTypes.confirmSpecials = confirm("Would you like to include special characters in your password? Click 'OK' for yes, 'Cancel' for no.");
    }

    // charTypes object
    var charTypes = {
        confirmLower: false,
        confirmUpper: false,
        confirmNums: false,
        confirmSpecials: false
    }

    confirmTypes();
    
    // prompt user for at least one character type
    while (!charTypes.confirmLower && !charTypes.confirmUpper && !charTypes.confirmNums && !charTypes.confirmSpecials) {
        alert("Make sure to include AT LEAST one type of character for your password!");
        confirmTypes();
    }

    // return charTypes
    return charTypes;
}

// TODO: create generatePassword function
// generate password based on user choices
function generatePassword() {
    // prompt user for criteria
    // get password length from user
    var passwordLength = getPasswordLength();
    // get character types to be used from user
    var charTypes = getCharTypes();

    // debugger;
    console.log("Password length:", passwordLength, "Character types:", charTypes);
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