// Tobin Risser's String To Do 1

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
    var spliter = str.split(" ");
    var removed = spliter.join("");
    return removed
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
    var spliter = str.split("");
    // console.log(spliter);
    var digits = [];
    for (let i=0; i<spliter.length; i++) {
        if (Number.isInteger(parseInt(spliter[i])) === true) {
            digits.push(spliter[i]);
            // console.log(spliter[i]);
        }
    }
    var strDigits = digits.join("")
    return strDigits
}

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str) {
    var spliter = str.split(" ");
    // console.log(spliter);
    var firstLetters = "";
    for (let i=0; i<spliter.length; i++){
        if (spliter[i][0] === undefined) {
            continue
        }
        firstLetters += spliter[i][0];
        // console.log(spliter[i][0]);
    }
    return firstLetters.toUpperCase()
}

// console.log(acronyms(" there's no free lunch - gotta pay yer way. "));
// console.log(acronyms("Live from New York, it's Saturday Night!"));

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(str){
    var spliter = str.split(" ").join("");
    return spliter.length
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShortStr(strArr, val) {
    for (let i=strArr.length-1; i>=0; i--){
        // console.log(strArr[i]);
        if (strArr[i].length < val) {
            for (let j=i; j<strArr.length-1; j++) {
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
        
    }
    return strArr
}

console.log(removeShortStr(["cool", "nice", "but", "function", "I"], 4));