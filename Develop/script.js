var uprChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lwrChars = 'abcdefghijklmnopqrstuvwxyz';
var numChars = '0123456789';
var specialChars = '~!@#$%^&*()_+-=';
var finalPass = '';

function generatePassword() {
  var passwordBank = '';

  var useLowerCase = confirm('Do you want to include lowercase characters?');
  var useUpperCase = confirm('Do you want to include uppercase characters?');
  var useNumeric = confirm('Do you want to include numeric characters?');
  var useSpecial = confirm('Do you want to include special characters?');
  var long = parseInt(
    prompt(
      'How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."))'
    )
  );

  if (long < 8 || long > 128) {
    window.alert('the Password should be in the range of 8 and 128');
    return generatePassword();
  }
  if (
    useLowerCase == false &&
    useUpperCase == false &&
    useNumeric == false &&
    useSpecial == false
  ) {
    window.alert('Please select one type of character');
    return generatePassword();
  }

  loopThrough(useLowerCase, useUpperCase, useNumeric, useSpecial, long);
  return finalPass;
}

var loopThrough = function (
  useLowerCase,
  useUpperCase,
  useNumeric,
  useSpecial,
  long
) {
  for (var i = 0; i < long; i++) {
    //var flag = false;
    if (finalPass.length === long) {
      break;
    }
    var rand = Math.floor(Math.random() * 4);

    switch (rand) {
      case 0:
        if (useLowerCase) {
          finalPass += getRandomLower();
          //flag = true;
        }
        break;
      case 1:
        if (useUpperCase) {
          finalPass += getRandomUpper();
          //flag = true;
        }
        break;
      case 2:
        if (useNumeric) {
          finalPass += getRandomNumber();
          //flag = true;
        }
        break;
      case 3:
        if (useSpecial) {
          finalPass += getRandomSymbol();
        }
        break;
      default:
        break;
    }

    if (finalPass.length < long) {
      loopThrough(useLowerCase, useUpperCase, useNumeric, useSpecial, long);
    }
  }
};

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
