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

    // The generate password calls the values from the user inputs

    generatePassword(answer, uselowerCasedCharacters, useupperCasedCharacters, usenumericCharacters, usespecialCharacters);
  } else{
    alert("Password selection does not meet the criteria. Please try again!")
  }
  
}






// Function to generate password with user input
function generatePassword(passwordLength,uselowerCasedCharacters, useupperCasedCharacters, usenumericCharacters, usespecialCharacters) {

  // The allChar variable stores the the characters the user selects based on the confirm choices.
  let allChar = '';
  if (useupperCasedCharacters){
    // if the user selects the upper case characters, it is stored in the allChar variable
    // the .join ensures that the character types selected by the user are joined together
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

  //  the password variable starts off as an empty string
  let password = '';

  // the for loop randomly selects values based on the different character values in the array
  for(let i = 0; i < passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * allChar.length);
    password += allChar.charAt(randomIndex);
    
    
  }
  // this logs the generated password to the console for debugging purposes


  console.log(password);
  

  // The alert message prints the generated password
  alert(`Your generated password is ${password}.`);
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // the getPasswordOptions function is called so it initialises the process of generating the password
  getPasswordOptions();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);