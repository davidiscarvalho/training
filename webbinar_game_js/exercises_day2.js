//**************************************//
//CONDITIONALS//
//**************************************//

// Copy this: const inputAge = prompt(“What’s your age?”).
// If the age is greater than 50, then console.log(“age is just a number!”). Else, console.log(“You young and beautiful person!”)

/*const inputAge = prompt("What's your age?")
if(inputAge > 50){
  console.log("Age is just a number!")
}else{
  console.log("You young and beautiful person")
}

// Let’s be more detailed: now if the age is smaller than 50 but greater or equal to 20, then console.log(“You’re not in your teens anymore!”). If the age is smaller than 20 console.log(“You young and beautiful person!”).

if(inputAge > 50){
  console.log("Age is just a number!")
}else if(inputAge <50 && inputAge >=20){
  console.log("You are not in your teens anymore")
}else{
  console.log("You young and beautiful person")
}
*/


// Create a variable with a language (“spanish”, “portuguese”, “english”, “italian”). Now improve the “hello world” to change depending on the chosen language.

const language = "dutch"

switch (language) {
    case "spanish":
        console.log("Hola Mundo!")
        break;
    case "portuguese":
        console.log("Olá Mundo!")
        break;
    case "italian":
        console.log("Ciao Mondo!")
        break;
    case "english":
        console.log("Hello World")
        break;
    default:
        console.log("Hello World")
        break;
}


// Create a variable with a number. Afterwards, if the number is even, console.log(“that is a even number”); if that is not the case, then console.log(“that is not an even number”).

const number = 11
if (number % 2 === 0) {
    console.log("That is an even number")
} else {
    console.log("That is an odd number")
}


// Create a variable with a number greater than 50. Afterwards, check if the number is divisible by 3, by 7 and by (3 & 7) and console.log the result in each case.

const anotherNumber = 63

if (anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7")
} else if (anotherNumber % 3 === 0) {
    console.log("Number is divisibile by 3")
} else if (anotherNumber % 3 === 0 && anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7 and 3")
}

if (anotherNumber % 3 === 0 && anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7 and 3")
} else if (anotherNumber % 3 === 0) {
    console.log("Number is divisibile by 3")
}
else if (anotherNumber % 7 === 0) {
    console.log("Number is divisibile by 7")
}