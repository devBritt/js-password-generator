// Assignment code here
// prompt user for password length (between 8 and 128), validate and return value
function getPasswordLength() {
    // variable for password length input
    var passwordLength;

    // request valid input while passwordLength is outside 8-128 range or NaN
    passwordLength = prompt("Please enter a whole number for the length of your password between 8 and 128.")
    
    // validate user input
    while (passwordLength < 8 || passwordLength > 128 || !Number.isInteger(Number(passwordLength))) {
        // console.log(Number(passwordLength));
        passwordLength = prompt("Make sure to enter a whole number (no decimals) between 8 and 128.");
    }

    // use Number(passwordLength) to change string input to number and return
    return Number(passwordLength);
}

// prompt user to confirm use of character types and return object with charTypeName: boolean attributes
function getCharTypes() {
    // charTypes object
    var charTypes = {
        confirmLower: false,
        confirmUpper: false,
        confirmNums: false,
        confirmSpecials: false
    }
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

    // ask user what character types they want to include
    confirmTypes();
    
    // prompt user for at least one character type if they didn't select any
    while (!charTypes.confirmLower && !charTypes.confirmUpper && !charTypes.confirmNums && !charTypes.confirmSpecials) {
        alert("Make sure to include AT LEAST one type of character for your password!");
        confirmTypes();
    }

    // return chosen character types
    return charTypes;
}

// generate password based on user choices
function generatePassword() {
    // password string
    var passwordStr = "";
    // random num generator
    function randomNum(max) {
        return Math.round(Math.random() * (max));
    }
    // prompt user for criteria
    // get password length from user
    var passwordLength = getPasswordLength();
    // get character types to be used from user
    var charTypes = getCharTypes();
    // create object with arrays of characters for each chosen char type
    var charOptions = [];
    if(charTypes.confirmLower) {
        charOptions.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    }
    if(charTypes.confirmUpper) {
        charOptions.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    }
    if(charTypes.confirmNums) {
        charOptions.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    }
    if(charTypes.confirmSpecials) {
        charOptions.push('\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E');
    }
    console.log('\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E');
    debugger;
    // generate password using given criteria with random number max based on length of charOptions
    for(var i = 0; i < passwordLength; i++) {
        // only use slice to get initial password characters AFTER the first character is chosen
        if(i === 0) {
            passwordStr = charOptions[randomNum(charOptions.length - 1)];
        } else {
            passwordStr = passwordStr.slice(0) + charOptions[randomNum(charOptions.length - 1)];
        }
    }
    
    // return password
    return passwordStr;
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