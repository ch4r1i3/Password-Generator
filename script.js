
// Button Generator variable
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// * Password Generator function * //
function generatePassword() {

  var userInput = window.prompt("How many characters do you want your password to have?")

  var psswrdLenght = parseInt(userInput)

  if(userInput === null) {
    return
  }

  if (isNaN(psswrdLenght)) {
    window.alert("Upss, sorry your answer is not a number.")
    return generatePassword() 
    }

  if (psswrdLenght < 8 || psswrdLenght > 128) {
    window.alert("Sorry, your password must be 8 to 128 characters long.")
    return generatePassword() 
  }
  
  var numbers = window.confirm ("Do you want your password to have numbers?")
  var symbols = window.confirm("Do you want your password to have symbols?")
  var lowercase = window.confirm("Do you want your password to have lowercase letters?")
  var uppercase = window.confirm("Do you want your password to have uppercase letters?")

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolsList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var optionsCart = []

  if(numbers === true) {
    optionsCart.push(numberList)
  }

  if(symbols === true) {
    optionsCart.push(symbolsList)
  }

  if(lowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if(uppercase === true) {
    optionsCart.push(uppercaseList)
  }

  if(optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < psswrdLenght; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  
  return generatedPassword
}



// * Write password to the #password input * //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// * Add event listener to generate button * //
generateBtn.addEventListener("click", writePassword);
