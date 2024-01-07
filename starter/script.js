// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // This prompts the user asking them what password length they want
  let passwordLength= prompt("What password length would you like?"); 
  // The string returned is converted into an integer using the parseInt method
  let answer = parseInt(passwordLength);

  // An if statement is initialised making sure the users can only input
  // numbers between 8 and 128
  if (answer >=8 && answer<=128){
    let uselowerCasedCharacters = confirm("Would you like lower case letters?")
    let useupperCasedCharacters = confirm("Would you like upper case letters?")
    let usenumericCharacters = confirm("Would you like numeric characters?")
    let usespecialCharacters = confirm("Would you like special characters?")

    generatePassword(answer, uselowerCasedCharacters, useupperCasedCharacters, usenumericCharacters, usespecialCharacters);
  } else{
    alert("Password selection does not meet the criteria. Please try again!")
  }
  
}






// Function to generate password with user input
function generatePassword(passwordLength,uselowerCasedCharacters, useupperCasedCharacters, usenumericCharacters, usespecialCharacters) {
  let allChar = '';
  if (useupperCasedCharacters){
    allChar+= upperCasedCharacters.join('');
  }
  if (uselowerCasedCharacters){
    allChar+= lowerCasedCharacters.join('');
  }
  if(usenumericCharacters){
    allChar+= numericCharacters.join('');
  }
  if(usespecialCharacters){
    allChar+= specialCharacters.join('');
  }
  let password = '';
  for(let i = 0; i < passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * allChar.length);
    password += allChar.charAt(randomIndex);
    
    
  }
  console.log(password);
  


  getPasswordOptions();
}

// Function for getting a random element from an array
function getRandom(arr) {

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