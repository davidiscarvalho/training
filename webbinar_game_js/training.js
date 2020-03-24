//VARIABLES//
/*
const myName = "Santi"
let myAge = 29

console.log(myName)
console.log(myAge)
//MY BIRTHDAY HAPPENED
myAge = 30
console.log(myAge)

//Variables Names
const camelCase = "myVar" //This is the one that we use as a convetion

let five5 = 5

console.log(five5)

//The code in this line is invisible for JS
*/

//MATH//
/*
const number1 = 2
const number2 = 10

let result

//SUM
result = number1 + number2
console.log(result)

//SUBSTRACTION
result = number2 - number1
console.log(result)

//DIVISION
result = number2 / number1
console.log(result)

//MULTIPLICATION
result = number2 * number1
console.log(result)

//EXPONENTIAL
result = number2 ** number1
console.log(result)

const string1 = "Hi"
const string2 = "Paula"

result = string1+string2
console.log(result)

//MODULUS

const number = 20
console.log(number % 2) // 20 / 2 = 10
console.log(number % 3) // 20 / 3 = 6 + 2
console.log(number % 5) // 20 / 5 = 4
console.log(number % 7) // 20 / 7 = 2 + 6

//To check if a number is even, we see if the number is divisble by 2

let newNumber = 10
console.log(newNumber % 2)

newNumber = 11
console.log(newNumber % 2)

//INCREMENT ++
let numberIncrement = 10
numberIncrement ++ //numberIncrement = numberIncrement + 1
console.log(numberIncrement)

//DECREMENT --
let numberDecrement = 21
numberDecrement --
console.log(numberDecrement) // numberDecrement = numberDecrement - 1

numberIncrement +=2 //numberIncrement = numberIncrement + 2
console.log(numberIncrement)

numberDecrement -=2 // numberDecrement = numberDecrement-2
console.log(numberDecrement)


//EQUAL SIGN
let name1 = "Santi"
let name2 = "Paula"

name1 = name2 //IM NOT ASKING IF THEY ARE THE SAME
console.log(name1)

*/

//LOGICAL OPERATORS

//BASIC COMPARISSON ==
const var1 = 1
const var2 = 2
const var3 = "1"

let result
result = var1 == var2
console.log(result)

result = var1 == var3
console.log(result)

//STRICT COMPARISSON
result = var1 === var2
console.log(result)

result = var1 === var3
console.log(result)

//NOT OPERATOR !
console.log('HERE STARTS THE NOT OPERATOR EXAMPLE')

//NOT OPERATOR BASIC COMPARISSON
result = var1 != var2
console.log(result)
result = var1 != var3
console.log(result)

//NOT OPERATOR STRICT COMPARISSON
result = var1 !== var2
console.log(result)

result = var1 !== var3
console.log(result)

//LETS CHECK HOW DOES THE NOT OPERATOR WORK

const boolean = true
console.log(!boolean)
console.log(!!boolean)
console.log(!!!!!!!!!!!!!!boolean)

//MATH COMPARISSONS

console.log("HERE STARTS MATH COMPARISSON")

const number1 = 2
const number2 = 10

//GREATER >
result = number1 > number2
console.log(result)
result = number2 > number1
console.log(result)
//GREATER OR EQUAL >=
result = number1 >= number2

//SMALLER <

result = number1 < number2
console.log(result)
//SMALER OR EQUAL <=
result = number1 <= number2
console.log(result)

//AND OPERATOR AND OR OPERATOR
console.log("HERE STARTS AND AND OR OPERATIONS")

const number3 = 4
const number4 = 10
const number5 = 20

//AND OPERATOR
result = number3 < number4 && number5 > number4
//.        4.    <.  10.   &&.   20 >.  10
//              true.      &&.      true
// result = true
console.log(result)

result = number3 > number4 && number5 > number4
//.        4.    >.  10.   &&.   20 >.  10
//              false.      &&.      true
// result = false
console.log(result)

//OR OPERATOR
result = number3 < number4 || number5 > number4
//.        4.    <.  10.   ||.   20 >.  10
//              true.      ||.      true
// result = true
console.log(result)

result = number3 > number4 || number5 > number4
//.        4.    >.  10.   ||.   20 >.  10
//              false.     ||.      true
// result = true
console.log(result)


// AND OPERATIONS --> If one condition is false, then all of it is false.

// OR OPERATIONS --> If one condition is true, then all of it is true
console.log("HERE STARTS BOOLEANS AND AND OR OR")
const trueVal = true
const falseVal = false

console.log(trueVal && trueVal) //true
console.log(trueVal && falseVal) //false
console.log(falseVal && trueVal) //false
console.log(falseVal && falseVal) //false

console.log(trueVal || trueVal) //true
console.log(trueVal || falseVal) //true
console.log(falseVal || trueVal) //true
console.log(falseVal || falseVal) //false


