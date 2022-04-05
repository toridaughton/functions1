// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true

const myFavNum = 2;
const myNumBoo = Boolean(myFavNum)
console.log(myNumBoo)

// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true

const myString = '';
const myStringBoo = Boolean(myString);
console.log(myStringBoo)

// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0

const lovesCats = true
let catsNum = Number(lovesCats)
console.log(catsNum)

// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the other a string

let numString = "1234";
let convertedString = +numString
console.log(numString, convertedString)

// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions

let inOneLine = +"1234"
let inOneLine2 = Number("1234")
console.log(inOneLine)
console.log(inOneLine2)

// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail
let myHeight = `59in`
let withNum = Number(myHeight)
let withParse = parseInt(myHeight)
console.log(withNum)
console.log(withParse)

// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors

let myAge = 26;
let ageToString = String(myAge);
console.log(myAge, ageToString)

// create another variable but this time use concatenation of empty quotes to turn your number into a string
let ageToString2 = myAge+"";
console.log(ageToString2)
// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string

const lovesDigimon = true;
let doYouLoveDigimon = "Do you love Digimon? YES! That is " + lovesDigimon
console.log(doYouLoveDigimon)

// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
const myName = "tori";


// .includes()
if(myName.includes("r") && myName.includes("o")){
    console.log("includes: r and o")
};

// .startsWith()
console.log(myName.includes("t"))

// .endsWith()
console.log(myName.includes("i"))


// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces

const tonsOfRoom = "    wow, there is so much room in here    "
console.log(tonsOfRoom)
// const noExtraRoom = console.log(tonsOfRoom.trim())
const noExtraRoom = tonsOfRoom.trim()
console.log(noExtraRoom)

// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)

let lowerCase = "man, it's loud in here!";
console.log(lowerCase)
lowerCase.toUpperCase();
let upperCase = lowerCase.toUpperCase();
console.log(upperCase);

// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string

let myFavVine = "This is my impression of Shakira when she goes to wash her hands but the water is too hot..."

let noFirstI = myFavVine.replace("i", "j")
console.log(noFirstI)
let noMoreI = myFavVine.replaceAll("i","j")
console.log(noMoreI)

// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference


// Joining Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference


// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function


// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error


// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code

// then show an arrow function with implicit return as well