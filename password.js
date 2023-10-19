function  generatePassword(){

   const passLength = 8
   const charset = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   let password = ""
for(let index = 0; index< passLength; index++){
   let random = Math.floor(Math.random()*charset.length)
   password += charset.charAt(random)
   document.getElementById("password").value = password
}
}

function generateSpe(){
   const passwordLength = 8 
   const charset = "~!@#$%^&*()_+?><,.:|"
   let password = ""
   for(index = 0; index < passwordLength; index++){
      let random = Math.floor(Math.random()*charset.length)
      password += charset.charAt(random)
      document.getElementById("password").value = password
   }
}

