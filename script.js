var number = "123456789";
var specialset = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var selectedCharacters = "";


function writePassword() {
  var length = Password length();
  if (length < 8 || length > 128) {
      alert("Your password must be between 8-128 characters. Please enter a valid length password.")
  let userInput = prompt("Enter a number between 8 - 128 for length of password");
  return passwordLength();

  confirmSpecialCharacter();
  confirmNumber();
  ConfirmLowercase();
  confirmUppercase();

  if (selectedCharacters === null || selectedCharacters === "") {
    alert(
      "You must choose at least one character. Please try again."
    );
    return writePassword();
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    selectedCharacters = "";
  }
  function generatePassword(length) {
    var ranPassword = "";
    for (var i = 0; i < length; i++) {
      ranPassword =
        ranPassword +
        selectedCharacters.charAt(
          Math.floor(Math.random() * selectedCharacters.length)
          );
        }
        return ranPassword;
      }
    var passwordLength = function () {
    var length = window.prompt(
     "Please choose a password length between 8 and 128 characters."
        );
        return length;
      };

  function confirmSpecialCharacter() {
    var specialCharUse = window.confirm(
      'Click "OK" if you want to include a special character.'
        );
        if (specialCharUse) {
          selectedCharacters += specialCharacter;
        }
      }
 
  function confirmNumber() {
    var numberUse = window.confirm(
      'Click "OK" if you want to include a number.'
        );
        if (numberUse) {
          selectedCharacters += number;
        }
      }
  function confirmLowerCase() {
    var lowerCaseUse = window.confirm(
       'Click "OK" if you want to include lowercase letters.'
        );
        if (lowerCaseUse) {
          selectedCharacters += lowerCase;
        }
      }
  function confirmUpperCase() {
    var upperCaseUse = window.confirm(
        'Click "OK" to include uppercase letters.'
        );
        if (upperCaseUse) {
          selectedCharacters += upperCase;
        }
      }

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
