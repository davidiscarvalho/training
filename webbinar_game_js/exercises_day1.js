// Create two variables, one with your name and one with your age.

const myName = "Santi"
let myAge = 29


// Create a variable called message that holds the following string “Hello [your name]! You are [your age] years old”.

const message = "Hello " + myName + "! You are " + myAge + " years old."


// Console log message
console.log(message)


// Create two new variables, one should be equal to your age times 2 and the other one equal to your age to the power of three. Console log both variables.

const myAgeTimesTwo = myAge * 2
const myAgeToThePowerOfThree = myAge ** 3

console.log("My Age Times Two", myAgeTimesTwo)
console.log("My Age to the Power of Three", myAgeToThePowerOfThree)


// Do a modulus operation that will let you understand if your age, age times 2 and age to the power of three are even numbers.

let result
result = myAge % 2
console.log(result) //resut === 0 means that my age is even; result !==0 means that my age is uneven
result = myAgeTimesTwo % 2
console.log(result)
result = myAgeToThePowerOfThree % 2
console.log(result)

// Think if the following are true or false and then test them.
// true && true && false -->FALSE
// false && true && true --> FALSE
// true && (true || false) --> TRUE
// (true || true)  || false --> TRUE
// (false || (true || false))&&(true || (true && (false || true))) --> TRUE

console.log(true && true && false)
console.log(false && true && true)
console.log(true && (true || false))
console.log((true || true) || false)
console.log((false || (true || false)) && (true || (true && (false || true))))
