// Assignment code here
// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };
// var uprChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var lwrChars = 'abcdefghijklmnopqrstuvwxyz';
// var numChars = '0123456789';
// var specialChars = '~!@#$%^&*()_+-=';
var LOWERCASE_CHAR_CODES = getRandomLower();
var UPPER_CASE_CHAR_CODES = getRandomUpper();
var NUMBER_CASE_CHAR_CODES = getRandomNumber();
var SYMBOL_CHAR_CODES = getRandomSymbol();

// let characterAmount=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));

function generatePassword() {
  var passwordBank = '';

  var useLowerCase = confirm('Do you want to include lowercase characters?');
  var useUpperCase = confirm('Do you want to include uppercase characters?');
  var useNumeric = confirm('Do you want to include numeric characters?');
  var useSpecial = confirm('Do you want to include special characters?');
  var Long = parseInt(prompt('How long'));

  if (
    useLowerCase == false &&
    useUpperCase == false &&
    useNumeric == false &&
    useSpecial == false
  ) {
    window.alert('Please select one type of character');
    return generatePassword();
    //  console.log(useLowerCase,useUpperCase, useNumeric,useSpecial)
  }

  if (useSpecial) {
    passwordBank += SYMBOL_CHAR_CODES;
  }
  if (useUpperCase) {
    passwordBank += UPPER_CASE_CHAR_CODES;
  }
  if (useNumeric) {
    passwordBank += NUMBER_CASE_CHAR_CODES;
  }

  // for (var i = 0; i < Long.length(); i++) {
  //   var pass = '';
  // }

  //password in a banl of eligible char, wrtie a for loop long time, aet a random char out of bank, and add to the password
  //which should another string
  console.log(passwordBank);
  return passwordBank;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
function getRandomSymbol() {
  const symbols = '~!@#$%^&*()_+-=';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
