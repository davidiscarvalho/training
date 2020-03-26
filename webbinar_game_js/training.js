//VARIABLES//

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


//MATH//

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

result = string1 + string2
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
numberIncrement++ //numberIncrement = numberIncrement + 1
console.log(numberIncrement)

//DECREMENT --
let numberDecrement = 21
numberDecrement--
console.log(numberDecrement) // numberDecrement = numberDecrement - 1

numberIncrement += 2 //numberIncrement = numberIncrement + 2
console.log(numberIncrement)

numberDecrement -= 2 // numberDecrement = numberDecrement-2
console.log(numberDecrement)


//EQUAL SIGN
let name1 = "Santi"
let name2 = "Paula"

name1 = name2 //IM NOT ASKING IF THEY ARE THE SAME
console.log(name1)


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


//VARIABLES
// Can be created with CONST or LET
//CONST is if the variable value does not change, it remains constant
//LET is if we want to change the value of the variable

//MATH
//SUM --> +
//SUBSTRACT --> -
//DIVIDE --> /
//MULTIPLY --> *
//EXPONENTIALS --> **
//MODULUS --> % (we can use this to check even and uneven numbers)
//INCREMENTALS (++) DECREMENTALS(--)


//LOGIC
// "=" --> ASSINGMENT
// "==" --> SIMPLE COMPARISSON
// "===" --> STRICT COMPARSSION
// "!" --> CHANGES THE COMPARISSON --> != !==
//"> < >= <="

//CONDITIONALS
/*
if(CONDITION){
  CODE EXECUTED IF CONDITION IS TRUE
}else{
  CODE EXECUTED IF CONDITION IS FALSE
}
*/


const trueBoolean = true
const falseBoolean = false

if (trueBoolean) {
  console.log("Condition is true")
} else {
  console.log("Condition is false")
}

if (falseBoolean) {
  console.log("Condition is true")
} else {
  console.log("Condition is false")
}

if (number1 === number2) {
  console.log("Numbers are the same")
} else {
  console.log("Numbers are different")
}

let result
if (number1 == string1) {
  result = number1 + string1
  console.log(result)
} else {
  console.log("Numbers can not be summed")
}

let difference

if (number1 >= number2) {
  difference = number1 - number2
  console.log("The difference between numbers is: ", difference)
} else {
  difference = number2 - number1
  console.log("The difference between numbers is: ", difference)
}

if (number1 > number2) {
  difference = number1 - number2
  console.log("The difference between numbers is: ", difference)
} else if (number2 > number1) {
  difference = number2 - number1
  console.log("The difference between numbers is: ", difference)
} else {
  console.log("Numbers are the same")
}



const number1 = 5
const number2 = 10
const number3 = 20

if (number2 > number1) {
  console.log("Number2 is bigger")
} else if (number2 > number1 && number2 < number3) {
  console.log("Number 2 is in the middle")
} else {
  console.log("Hello World")
}

if (number2 > number1 && number2 < number3) {
  console.log("Number 2 is in the middle")
} else if (number2 > number1) {
  console.log("Number 2 is bigger")
} else {
  console.log("Hello world")
}



//DAYS OF THE WEEK
// 1--> Monday
// 2--> Tuesday
// 3--> Wednesday
// 4--> Thursday
// 5--> Friday
// 6--> Saturday
// 7--> Sunday


const day = 1

if (day === 1) {
  console.log("Monday")
} else if (day === 2) {
  console.log("Tueday")
} else if (day === 3) {
  console.log("Wednesday")
} else if (day === 4) {
  console.log("Thursday")
} else if (day === 5) {
  console.log("Friday 🍻")
} else if (day === 6) {
  console.log("Saturday")
} else if (day === 7) {
  console.log("Sunday")
} else {
  console.log("That is not a valid day.")
}

switch (day) {
  case 1: //day === 1
    console.log("Monday")
    break;
  case 2: //day === 2
    console.log("Tuesday")
    break;
  case 3: //day --- 3
    console.log("Wednesday")
    break;
  case 4: //day === 4
    console.log("Thursday")
    break;
  case 5: // day === 5
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;
  default:
    console.log("That is not a valid day")
    break;
}

const newNumber = 4
const newNumber2 = 10
const newNumber3 = 5

if (!(newNumber < newNumber2 || newNumber3 > newNumber2)) {
  console.log("Hey there!")
} else {
  console.log("Uuu, that is advanced logic!")
}

if (newNumber % 2 === 0) {
  console.log("newNumber is an even number")
} else {
  console.log("NewNumber is an uneven number")
}

if (newNumber % 2 !== 0) {
  console.log("newNumber is an uneven number")
} else {
  console.log("NewNumber is an even number")
}



//LOOPS//

let i = 0
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)

//FOR LOOP//
/*
for(starter, condition, increment){
  CODE TO BE RUN FROM STARTER UNTIL CONDITION, INCREMENTED WITH INCREMENT
}
*/

for (let i = 0; i <= 100; i++) {
  console.log(i)
}

let count = 0
while (count <= 100) {
  console.log(count)
  count++
}


for (let i = 0; i <= 100; i += 5) {
  console.log(i)
}

let count = 0
while (count <= 100) {
  console.log(count)
  count += 5
}



for (let i = 100; i >= 0; i--) {
  console.log(i)
}

let count = 100
while (count >= 0) {
  console.log(count)
  count--
}



for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("FIVE")
  } else if (i === 10) {
    console.log("TEN")
  } else {
    console.log(i)
  }
}

let counter = 0

while (counter <= 10) {
  switch (counter) {
    case 5:
      console.log("FIVE")
      break;
    case 10:
      console.log("TEN")
      break;
    default:
      console.log(counter)
      break
  }
  counter++
}