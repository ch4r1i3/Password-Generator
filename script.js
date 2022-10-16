
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

  var passwordLenght = parseInt(userInput)

  if(userInput === null) {
    return
  }

  if (isNaN(passwordLenght)) {
    window.alert("Upss, sorry your answer is not a number.")
    return generatePassword() 
    }

  if (passwordLenght < 8 || passwordLenght > 128) {
    window.alert("Sorry, your password must be 8 to 128 characters long.")
    return generatePassword() 
  }
  
  var userWantsNumbers = window.confirm ("Do you want your password to have numbers?")
  var userWantsSymbols = window.confirm("Do you want your password to have symbols?")
  var userWantsLowercase = window.confirm("Do you want your password to have lowercase letters?")
  var userWantsUppercase = window.confirm("Do you want your password to have uppercase letters?")

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolsList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var optionsCart = []

  if(userWantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if(userWantsSymbols === true) {
    optionsCart.push(symbolsList)
  }

  if(userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if(userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }

  if(optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLenght; i++) {
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
