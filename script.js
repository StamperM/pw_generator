
let passwordArr = [4,6,3,2,5,2,4];
let passwordLength = 9;
const uppercase = getElementByID("upcase")
const lowercase = getElementByID("lcase")
const specChar = getElementByID("specChar")
const

// console.log(lengthPw);
// console.log(passwordLower);
// console.log(passwordUpper);
// console.log(passwordchar);

function numberOfCharPW() {
    const lengthPw = prompt("Select Password lenght between 8 - 128");
   const wrongLength = prompt("You did not select a number between 8 and 128. Please try again.");
    if (lengthPw > 8 && lengthPw < 128 ){
    passwordLenght = lengthPw;
console.log (passwordLenght);
    return passwordLenght;
} else {
    return wrongLength;
  
    
}
}

function whatCharPW(){
// let passwordLower = confirm("Would you like to include lowercase letters?");
// let passwordUpper = confirm("Would you like to include capitalized letters?");
// let passwordchar = confirm("Would you like to include special characters?");
const lowercase = ["a" , "b","c","d","e","f","g","h","i","j","k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = lowercase.map(letter => letter.toUpperCase());
const specialChar = ["!" , "@", "#", "$", "&", "*", "^", "%"];


if (passwordLower && passwordUpper && passwordchar === true) {
    passwordArr = lowercase.concat(uppercase, specialChar);
    console.log(passwordArr);
    return passwordArr;


} else if (passwordLower && passwordUpper === true) {
     passwordArr = lowercase.concat(uppercase);
    console.log(passwordArr);
    return passwordArr
} else if (passwordUpper && passwordchar === true){
    passwordArr = uppercase.concat(specialChar);
    console.log(passwordArr);
    return passwordArr;
} else if (passwordLower && passwordchar === true){
    passwordArr = lowercase.concat(specialChar);
    console.log(passwordArr);
    return passwordArr;
} else {
    passwordArr = passwordchar;
    console.log(passwordArr);
    return passwordArr;

}

}








function generatePW(lenght, arr) {
  
let passwordOutput ;
let addToPW ;
    for (let i = 0; i < lenght; i++){
       
passwordOutput += arr.toString.charAt(Math.floor(Math.random() * (arr.length)+1));
    }
 console.log(passwordOutput);
}

generatePW(passwordLength, passwordArr);
