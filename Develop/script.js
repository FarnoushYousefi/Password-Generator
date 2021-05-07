// Assignment code here
const LOWERCASE_CHAR_CODES=arrayFromLowToHigh(65,90);
const UPPER_CASE_CHAR_CODES=arrayFromLowToHigh(97,122);
const NUMBER_CASE_CHAR_CODES=arrayFromLowToHigh(48,57);
const SYMBOL_CHAR_CODES=arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126))
let characterAmount=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));

function Criteria(low, upper,numeric,special){
  var useLowerCase=confirm("Do you want to include lowercase characters?");
  var useUpperCase=confirm("Do you want to include uppercase characters?");
  var useNumeric=confirm("Do you want to include numeric characters?");
  var useSpecial=confirm("Do you want to include special characters?");
  console.log(useLowerCase,useUpperCase, useNumeric,useSpecial)
}

function generatePassword(charcteramount, includeupperCase,includenumbers,includesymbols){

  console.log(LOWERCASE_CHAR_CODES);
  // let charCodes;
  // var useLowerCase=confirm("Do you want to include lowercase characters?");
  // var useUpperCase=confirm("Do you want to include uppercase characters?");
  // var useNumeric=confirm("Do you want to include numeric characters?");
  // var useSpecial=confirm("Do you want to include special characters?");
 
  
  if (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
    window.alert("Please select one type of character");
    Criteria(useLowerCase,useUpperCase,useNumeric,useSpecial);
  //  console.log(useLowerCase,useUpperCase, useNumeric,useSpecial)
}

if (includesymbols) charCodes=charCodes.concat(useSpecial)

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
function arrayFromLowToHigh(low,high){
  const arr=[]
  for(let i=low; i<=high;i++){
    arr.push(i)
  }
  return arr;
}

