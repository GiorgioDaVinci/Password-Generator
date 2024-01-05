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
  let password= prompt("What password length would you like?");
  if (password >=8 && password<=128){
    lowerCasedCharacters = confirm("Would you like lower case letters?")
    upperCasedCharacters = confirm("Would you like upper case letters?")
    numericCharacters = confirm("Would you like numeric characters?")
    specialCharacters = confirm("Would you like special characters?")
  }else{
    alert("Password selection does not meet the criteria. Please try again!")
  }
  
}
// getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {

}




// Function to generate password with user input
function generatePassword(hasLowerCasedCharacters, hasUpperCasedCharacters, hasNumericCharacters, hasSpecialCharacters) {
  let alltypes = '';

  if(hasLowerCasedCharacters){
    alltypes += lowerCasedCharacters;
  }
  if(hasUpperCasedCharacters){
    alltypes +=upperCasedCharacters
  }
  if(hasNumericCharacters){
    alltypes +=numericCharacters
  }
  if(hasSpecialCharacters){
    alltypes +=specialCharacters
  }
  getPasswordOptions();
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