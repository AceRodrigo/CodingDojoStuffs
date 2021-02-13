
// cont str1="there's no free lunch - gotta pay yer way. ";
// const expected1= "TNFL-GPYW";

// const str2 = "Live from New Your, it's Saturday Night!";
// const expected2 = "LFNYISN";

// function acronymize(str){
//     newStr=""
//     newStr += (str[0]);
//     for (var i =0; i < str.length -1; i++){
//         if (str[i] == ''){
//             newStr+=(str[i+1]).toUpperCase();
//         }
//     }return newStr
// }

// console.log(acronymize(str1));
// console.log(acronymize(str2));

// module.exports = { acronymize }



// //1. Making sure all the means have ends.
// //2. Create a function to  


// const str1="Y(3(p)p(3)r)s";
// const expected2 = true;

// //teacher example for algo


// function parensValid(str){
//     var parensStack = []
//     for (var char of str){
//         if (char === '('){
//             parensStack.push(char)
//         }
//         else if (char === ')'){
//             if(parensStack.length === 0){
//                 return False
//             } else{
//                 parensStack.pop();
//             }

//         }
//     }
//     return parensStack.length === 0;    //logical check. if it equals 0 then what does that evaluate too
// }                                       //if parensStack returns anything but zero it will return False.



// const str2 = "N(0(p)3";
// const expected2




const str1 = "a x a"
const expected1 = true

const str2 = "racecar"
const expected2 = true

const str3 = "Dud"
const expected3 = false

const str4 = "oho!"
const expected4 = false


/* Reverses the given str.
/* - Time: O(?).
/* - Space: O(?).
/* @ param {string} str String to be reversed.
/* @ return {string} The given str reversed.
*/
function reverseString(str) {
    for (let i=0; i < str.length/2; i++) {
        var newIndex = (str.length - i - 1)
        var temp = str.charAt(i)
        str.charAt(i) = str.charAt(newIndex)
        str.charAt(newIndex) = temp
    }
    return str
}

/*
* Determines if the given str is a palindrome(same forwards and backwards).
* - Time: O(?).
* - Space: O(?).
* @ param {string} str
* @ return {boolean} Whether the given str is a palindrome or not.
*/
function isPalindrome(str) {
    for (let i=0; i < str.length/2; i++) {
        if (str.charAt(i) == str.charAt(str.length - i - 1)) {
            continue
        } else {
            return false
        }
    }
    return true
}

function isPalindrome2(str) {
    if (reverseString(str) === str) {
        return true
    } 
    else {
        return false
    }
}

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))

console.log(isPalindrome2(str1))
console.log(isPalindrome2(str2))
console.log(isPalindrome2(str3))
console.log(isPalindrome2(str4))