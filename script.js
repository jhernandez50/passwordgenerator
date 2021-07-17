// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){


  var charNum = prompt("Chose character length (between 8 and 256)")
  var specialChar = confirm("Do you want special characters?")

  /* Create two options, one with special character and the other one with regular letters */
  
  var specialLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!!#$%&/()=?¡*][}{";
  var normalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var result ="";
  
  if(specialChar){
   
  /* Chose a random digit from specialLetters array */ 

    for (var i=0; i <= charNum ; i++ ){
        let generate = specialLetters[Math.floor(Math.random() * specialLetters.length)];
        result += generate
   }
  
  
  return result
  
  }
  
  else {
   /* Chose a random digit from charNum array */ 

      for (var i=0; i <= charNum ; i++ ){
          let generate =normalLetters[Math.floor(Math.random() * normalLetters.length)];
          result += generate}   

  }
  return result
  
  }
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



