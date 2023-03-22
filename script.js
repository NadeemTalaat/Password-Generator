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
  if (useLower) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  else if (useLower==false) {
    return '';
  }
}

// Declare function to get random uppercase character
function getRandomUpper() {
  if (useUpper) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  else if (useUpper==false) {
    return '';
  }
}

// Declare function to get random number
function getRandomNumber() {
  if (useNumbers){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  else if (useNumbers==false) {
    return '';
  }
}

// Declare function to get random special character
// List of special characters sourced from https://owasp.org/www-community/password-special-characters
function getRandomSymbol() {
  const symbols = '!"#$%&()*+,-./;:<=>?@[]^_`{}|~';
  if (useSpecial) {
    return symbols[Math.floor(Math.random()* symbols.length)];
  }
  else if (useSpecial==false) {
    return '';
  }
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

// Function to shuffle a string.
// The following code was sourced from the following link and adapted for my code's purposes. https://stackoverflow.com/questions/3079385/str-shuffle-equivalent-in-javascript
function shufflePassword(string) {
  var parts = string.split('');
  for (var i = parts.length; i > 0;) {
      var random = parseInt(Math.random() * i);
      var temp = parts[--i];
      parts[i] = parts[random];
      parts[random] = temp;
  }
  return parts.join('');
}

function generatePassword() {
  let password="";
  key=0;

  while (password.length<numberOfCharacters) {
    var lower=0;
    var upper=1;
    var number=2;
    var symbol=3;
    
    
    var newCharacter=''
    if (key===lower) {
      newCharacter = getRandomLower();
    }
    else if (key===upper) {
      newCharacter = getRandomUpper();
    }
    else if (key===number) {
      newCharacter = getRandomNumber()
    }
    else if (key===symbol) {
      newCharacter = getRandomSymbol();
    }
    else {
      newCharacter = getRandom();
    }

    password = `${password}${newCharacter}`
    key++;
  }
  
  password = shufflePassword(password);
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
