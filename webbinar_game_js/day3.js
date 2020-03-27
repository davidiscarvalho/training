//VARIABLES
//Can be declared with Let and with Const
//Let --> Variables value change
//Const --> Variables value remain constant

//MATH
// + --> Sum
// - --> Substract
// / --> Division
// * --> Multiplication
// ** --> Exponential
// % --> Modules (Check if a value is divisibile by another, or check if a number is even/odd)
//Incrementals (++) and Decrementals (--)

//LOGIC
// = --> In javascript does not mean comparisson, it means assingment
// == --> Basic Comparisson (only value, not type)
// === --> Strict Comparisson
// ! --> Not Operator (!= or !==)
// >, <, >=, <=
//&& operations
// || operations

//CONDITIONALS

//IF
/*
if(CONDITION){
  //THIS CODE WILL RUN IF CONDITION IS TRUE
} else if(CONDITION 2){
  //THIS CODE WILL RUN IF CONDITION 2 IS TRUE
}else{
  RUNS WHEN ALL PREVIOUS CONDITIONS ARE FALSE
}
*/
//SWITCH CASE
/*
switch(VARIABLE){
  CASE A:
  //code will run if variable matches condition A
  break;
  CASE B:
  //code will run if variable matches condition B
  break;
  default:
  //code will run if no case was matched
  break;
}
*/

//LOOPS
//FOR LOOPS
/*
for(counter (i); condition; increment){
  //code that runs until I meats condition after being incremented by increment
}
*/

//WHILE LOOPS
/*
let counter
while(CONDITION){
  this code will run while the condition is true
}
*/

//FUNCTION DECLARATION

function helloWorld() {
    console.log("Hello World")
}

helloWorld()

//FUNCTION EXPRESSION

const helloWorld2 = function () {
    console.log("Hello World 2")
}

helloWorld2()

console.log("Hello Paula")
const name = "Paula"
console.log("Hello", name)
const name2 = "Santiago"
console.log("Hello", name2)
const name3 = "Carmen"
console.log("Hello", name3)

const sayHello = function (name) {
    console.log("Hello", name)
}

sayHello("Paula")
sayHello("Santi")
sayHello("Carmen")

sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")
sayHello("Paula")

for (let i = 0; i < 10; i++) {
    sayHello("Paula")
}

sayHello("Carmen")
sayHello("Carmen")
sayHello("Carmen")


for (let i = 0; i < 3; i++) {
    sayHello("Carmen")
}

const sayHello2 = function (name, amountOfTimes) {
    for (let i = 0; i < amountOfTimes; i++) {
        console.log("Hello", name)
    }
}

sayHello2("Santi", 20)
sayHello(20, "Santi") //this does not work!

const sayHelloAnnoying = function (name, amountOfTimes) {
    for (let i = 0; i < amountOfTimes; i++) {
        sayHello(name)
    }
}

sayHelloAnnoying("Tom", 14)



const sum = function (number1, number2) {
    const result = number1 + number2
    return result
}
//sum(1,2)

const sumResult = sum(10, 98)
console.log(sumResult)

