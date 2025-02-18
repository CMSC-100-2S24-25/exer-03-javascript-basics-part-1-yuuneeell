// JOYOSA, EUNEL JACOB C. | 2023-00895
// CMSC 100 C-1L
// EXER 3 - JavaScrip Basics Part 1


const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
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

    hasUpper = false;
    hasLower = false;
    hasNumber = false;

    // whenever search() would return -1 (meaning there's no such thing from the char array its searching), it will return false.
    for (let i = 0; i < alphaUpper.length; i++) {
        if (pword1.includes(alphaUpper[i]) && pword2.includes(alphaUpper[i])) {
            hasUpper = true;
            break;
        }
    }

    for (let i = 0; i < alphaLower.length; i++) {
        if (pword1.includes(alphaLower[i]) && pword2.includes(alphaLower[i])) {
            hasLower = true;
            break;
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (pword1.includes(numbers[i]) && pword2.includes(numbers[i])) {
            hasNumber = true;
            break;
        }
    }

    if (hasUpper && hasLower && hasNumber) {
        return true;
    } else if (!hasUpper && hasLower && hasNumber) {
        console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
        console.log("CAUSE: One of the passwords does not have at least 1 uppercase character.");
        return false;
    } else if (hasUpper && !hasLower && hasNumber) {
        console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
        console.log("CAUSE: One of the passwords does not have at least 1 lowercase character.");
        return false;
    } else if (hasUpper && hasLower && !hasNumber) {
        console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.");
        console.log("CAUSE: One of the passwords does not have at least 1 number.");
        return false;
    } else if (!(hasUpper && hasLower && hasNumber)) {
        console.log("NOTICE: Passwords must have at least 1 uppercase character, 1 lowercase character, and 1 number.")
    }
}


function flipThePWord(pword) {

}


function storePWord(name, ogpword, newpword) {

}

console.log(validatePWord("hellohello", "hello"))
console.log(validatePWord("hello", "hello"))
console.log(validatePWord("hello1234", "hello1234"))
console.log(validatePWord("Hello1234", "Hello1234"))
console.log(validatePWord("HelloHello", "HelloHello"))
console.log(validatePWord("HELLO1234", "HELLO1234"))