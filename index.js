// JOYOSA, EUNEL JACOB C. | 2023-00895
// CMSC 100 C-1L
// EXER 3 - JavaScrip Basics Part 1


const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function validatePWord(pword1, pword2) {

    if (pword1 !== pword2) { // once they do not match at start, return false (covers length as well)
        console.log("NOTICE: Passwords do not match.");
        return false;
    }

    // checks whether one of the entered passwords have less than 8 characters
    if (pword1.length < 8 || pword2.length < 8) {
        console.log("NOTICE: Passwords must have at least 8 characters.");
        return false;
    }

    // initialize flagsd for the other password requirements
    hasUpper = false;
    hasLower = false;
    hasNumber = false;

    // for loop to check if both passwords have at least 1 uppercase character
    for (let i = 0; i < alphaUpper.length; i++) {
        if ((pword1.indexOf(alphaUpper[i]) !== -1) && (pword2.indexOf(alphaUpper[i]) !== -1)) {
            hasUpper = true;
            break;
        }
    }

    // for loop to check if both passwords have at least 1 lowercase character
    for (let i = 0; i < alphaLower.length; i++) {
        if ((pword1.indexOf(alphaLower[i]) !== -1) && (pword2.indexOf(alphaLower[i]) !== -1)) {
            hasLower = true;
            break;
        }
    }

    // for loop to check if both passwords have at least 1 number character
    for (let i = 0; i < numbers.length; i++) {
        if ((pword1.indexOf(numbers[i]) !== -1) && (pword2.indexOf(numbers[i]) !== -1)) {
            hasNumber = true;
            break;
        }
    }

    // if-else statements that determines what boolean to return depending on cases of the flags
    if (hasUpper && hasLower && hasNumber) {
        return true;
    } else if (!hasUpper && hasLower && hasNumber) {
        // console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
        // console.log("CAUSE: One of the passwords does not have at least 1 uppercase character.");
        return false;
    } else if (hasUpper && !hasLower && hasNumber) {
        // console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
        // console.log("CAUSE: One of the passwords does not have at least 1 lowercase character.");
        return false;
    } else if (hasUpper && hasLower && !hasNumber) {
        // console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
        // console.log("CAUSE: One of the passwords does not have at least 1 number.");
        return false;
    } else if (!(hasUpper && hasLower && hasNumber)) {
        // console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
    }
}

// function that flips/reverses the password
function flipThePWord(pword) {
    let strConcat = pword.concat(pword); // create new string which concatenate the password to itself
    let strEnd = pword.length - 1; // store to variable strEnd the value of the end of the string
    let flippedString = ""; // initialize empty string to append flipped string onto

    // for loop that does the reversing of the string (password)
    for (let char = strEnd; char >= 0; char--){
        flippedString += strConcat[char];
    }

    return flippedString;
}

// function that stores passwords in an object with two keys: name & newpassword
function storePWord(name, pword1, pword2) {
    const user = {};

    user.name = name;

    if (validatePWord(pword1, pword2)){
        user.newpassword = flipThePWord(pword1);
    } else {
        user.newpassword = pword1;
    }

   return user;
}

// For Testing validatePWord():
// console.log(validatePWord("hellohello", "hello"));
// console.log(validatePWord("hello", "hello"));
// console.log(validatePWord("hello1234", "hello1234"));
// console.log(validatePWord("Hello1234", "Hello1234"));
// console.log(validatePWord("HelloHello", "HelloHello"));
// console.log(validatePWord("HELLO1234", "HELLO1234"));

// Test Cases
console.log("storePWord('John', 'Pass1234', 'Pass1234')");
console.log(storePWord("John", "Pass1234", "Pass1234"));

console.log("storePWord('John', 'Pass123', 'Pass12345')");
console.log(storePWord("John", "Pass123", "Pass12345"));