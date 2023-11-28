
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
]; //

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

 // Prompt user for password criteria
 
 function generatePassword() {
 
  var minLength = parseInt(prompt("Enter minimum password length:"));
  var maxLength = parseInt(prompt("Enter maximum password length:"));
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Combine character sets based on user criteria

  var allCharacters = "";
  if (includeUppercase) allCharacters += upperCasedCharacters;
  if (includeLowercase) allCharacters += lowerCasedCharacters;
  if (includeNumbers) allCharacters += numericCharacters;
  if (includeSpecialChars) allCharacters += specialCharacters;

  // Check if at least one character set is selected

  if (allCharacters === "") {
    alert("Please select at least one character set.");
    return;
  }

  // Generate password

  var password = "";
  var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }
document.getElementById("password").innerHTML = password;
 
}

// Call the function to generate password

generatePassword();
