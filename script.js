// Assignment code here


// // Get references to the #generate element

// 

// // Write password to the #password input
// 


// }

// // Add event listener to generate button




var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numBers = "0123456789";
var specialCharacters = "~`!@#$%^&*_-+=?<>";



alert("Do you want to generate a unique password? Select OK to continue");


var confirmLowercase = confirm("Do you want lowercase values in your password?");
console.log(confirmLowercase);

var confirmUppercase = confirm("Do you want uppercase values in your password?");
console.log(confirmUppercase);



var confirmNumeric = confirm("Do you want numeric values in your password?");
console.log(confirmNumeric);


var confirmSpecial = confirm("Do you want special characters in your password?");
console.log(confirmSpecial);

var passwordLength = Number(prompt("Enter a number from 8 to 128 to generate password character length"));
console.log(passwordLength);
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("Good password length");
}
else {
  alert("Password length must be 8-128");
};



var ebonyPassword = "";
if (confirmLowercase) {
  ebonyPassword += lowerCase;
}
if (confirmUppercase) {
  ebonyPassword += upperCase;
}
if (confirmNumeric) {
  ebonyPassword += numBers;
}
if (confirmSpecial) {
  ebonyPassword += specialCharacters;
}

;
var button = document.getElementById('generate');
button.addEventListener('click', generatePassword());

function generatePassword () 
{
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * ebonyPassword.length);
    password += ebonyPassword[randomIndex];
  }

  
  alert("Your randomly generated password is " + password);
}

;
