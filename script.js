// Assignment Code
var generateBtn = document.querySelector("#generate");


let numberOfCharacters=5;


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

function generatePassword() {
  let password="";
  for (i=0; i<numberOfCharacters; i++) {
    var key=Math.floor(Math.random()*4);
    let newLetter=''
    if (key==0) {
      newLetter=getRandomLower();
    }
    else if (key==1) {
      newLetter=getRandomUpper();
    }
    else if (key==2) {
      newLetter=getRandomNumber();
    }
    else if (key==3) {
      newLetter=getRandomSymbol();
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
