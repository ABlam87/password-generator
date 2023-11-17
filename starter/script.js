// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')',
  '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var chars = [""];  
var passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  
  let passwordLength = prompt("How long would you like your password to be? Must be between 8-128 characters", "8 - 128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert('You had one job. Between 8-128 WE SAID. Refresh and try again');
    return;
  }

  if (confirm("Include lowercase letters in your password? Ok for yes, Cancel for no") == true) {
        chars += lowerCasedCharacters;
        alert('Lowercase letters added!');
  } else {alert('No lowercase letters, got it')};

  if (confirm("Include uppercase letters in your password? Ok for yes, Cancel for no") == true) {
        chars += upperCasedCharacters;
        alert('Uppercase letters added!');
  } else {alert('No Uppercase letters, got it')};

  if (confirm("Include numbers in your password? Ok for yes, Cancel for no") == true) {
        chars += numericCharacters;
        alert('Numbers added!');
  } else {alert('No numbers, got it')};

  if (confirm("Include special characters (?$! etc) in your password? Ok for yes, Cancel for no") == true) {
        chars += specialCharacters;
        alert('Special characters added!');
  } else {alert('No special characters, got it')};

  if (chars.length === 1) {
        alert("ok, you need to actually include SOME characters. You broke the program, congrats. Refresh the page and try not to be such a wang next time");
        return; 
  };
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  getPasswordOptions();
  console.log(chars);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);