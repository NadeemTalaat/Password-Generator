// Assignment Code
var generateBtn = document.querySelector("#generate");

// Request number of characters from user
let numberOfCharacters = prompt("How many characters should the password have?");

if (numberOfCharacters<8){
  alert("Password needs to be between 8 and 128 characters");
  numberOfCharacters = prompt("How many characters should the password have?");
}
else if (numberOfCharacters>128) {
  alert("Password needs to be between 8 and 128 characters");
  numberOfCharacters = prompt("How many characters should the password have?");
}

// User input - use lowercase letters?
var useLower = confirm("Should the password include lowercase letters? OK=Yes, Cancel=No");

// User input - use uppercase letters?
var useUpper = confirm("Should the password include uppercase letters? OK=Yes, Cancel=No");

// User input - use numbers?
var useNumbers = confirm("Should the password include numbers? OK=Yes, Cancel=No");

// User input - use special characters?
var useSpecial = confirm("Should the password include special characters? OK=Yes, Cancel=No");

// The following code was sourced from Travery Media (https://www.youtube.com/watch?v=duNmhKgtcsI)

// Declare function to get random lowercase character
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Declare function to get random uppercase character
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Declare function to get random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Declare function to get random special character
// List of special characters sourced from https://owasp.org/www-community/password-special-characters
function getRandomSymbol() {
  const symbols = '!"#$%&()*+,-./;:<=>?@[]^_`{}|~';
  return symbols[Math.floor(Math.random()* symbols.length)];
}

function getRandom() {
  var key=Math.floor(Math.random()*4);
  if (key==0) {
    return getRandomLower();
  }
  else if (key==1) {
    return getRandomUpper();
  }
  else if (key==2) {
    return getRandomNumber();
  }
  else if (key==3) {
    return getRandomSymbol();
  }
}

function generatePassword() {
  let password="";
  
  for (i=0; i<numberOfCharacters; i++) {
    var lower=0;
    var upper=1;
    var number=2;
    var symbol=3;
    
    
    let newLetter=''
    if (i===lower) {
      newLetter = getRandomLower();
    }
    else if (i===upper) {
      newLetter = getRandomUpper();
    }
    else if (i===number) {
      newLetter = getRandomNumber()
    }
    else if (i===symbol) {
      newLetter = getRandomSymbol();
    }
    else {
      newLetter = getRandom();
    }

    password = `${password}${newLetter}`
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
