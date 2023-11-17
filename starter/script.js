// Array of special characters to be included in password
var specialCharacters = [
  '@', 
  '%', 
  '+', 
  "\\", 
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
  '.'];

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

var chars = [];  
var password="";
var randomNumber =0;

// Function to prompt user for password options
function getPasswordLength () {
  passwordLength = prompt("How long would you like your password to be? Must be between 8-128 characters", "8");
}

function getPasswordOptions() {

  if (passwordLength < 8 || passwordLength > 128) {
    alert('You had one job. Between 8-128 WE SAID. Refresh and try again');
    return;
  }
  if (confirm("Include lowercase letters in your password? Ok for yes, Cancel for no") == true) {
        chars.push(lowerCasedCharacters);
        alert('Lowercase letters added!');
  } else {alert('No lowercase letters, got it')};

  if (confirm("Include uppercase letters in your password? Ok for yes, Cancel for no") == true) {
        chars.push(upperCasedCharacters);
        alert('Uppercase letters added!');
  } else {alert('No Uppercase letters, got it')};

  if (confirm("Include numbers in your password? Ok for yes, Cancel for no") == true) {
        chars.push(numericCharacters);
        alert('Numbers added!');
  } else {alert('No numbers, got it')};

  if (confirm("Include special characters (?$! etc) in your password? Ok for yes, Cancel for no") == true) {
        chars.push(specialCharacters);
        alert('Special characters added!');
  } else {alert('No special characters, got it')};

  if (chars.length === 1) {
        alert("ok, you need to actually include SOME characters. You broke the program, congrats. Refresh the page and try not to be such a wang next time");
        return; 
  };
    selectedChars = chars.flat(1);
}

// Function for getting a random element from an array
function getRandom(chars) {
  randomNumber = Math.floor(Math.random() * selectedChars.length);
  password += selectedChars.substring(randomNumber);
  console.log(password)
}


//getRandom();

// Function to generate password with user input

// function generatePassword() {
//   for (i = 0; i <= passwordLength; i++) {
//     randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber);
//    };
  //console.log(randomNumber);
  //console.log(password);
//}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordLength();
  getPasswordOptions();
  // generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

//Add event listener to generate button

generateBtn.addEventListener('click', writePassword);