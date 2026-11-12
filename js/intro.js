let stuDent = "Anthony";
let studenT = "John";

//operators in Javascript
let x = 5;

console.log(stuDent + " is " + x + " years old."); // Addition

console.log(5 + 5 + "5"); // Concatenation

//Introdction to Conditional Statements
let ValidAge = 18;
//  strict equality operator and loose equality operator
let user = true;

console.log(user == 1); // true

console.log(user === 1); // false

if (x >= ValidAge) {
  console.log(stuDent + " is eligible to vote.");
} else {
  console.log(stuDent + " is not eligible to vote.");
}

//else if statement
let marks = 55;
if (marks >= 80) {
  console.log(stuDent + " has scored distinction.");
} else if (marks >= 60) {
  console.log(stuDent + " has scored first division.");
} else {
  console.log(stuDent + " has not scored enough marks.");
}

//switch statement
let day = 6;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

//nested if statement
let Bread = "Radopin";

if (Bread === "Radopin") {
  let freshness = "Fresh";
  if (freshness === "Fresh") {
    console.log("The bread is fresh and ready to eat.");
  } else {
    console.log("The bread is not fresh.");
  }
} else {
  console.log("The bread is not Radopin.");
}

//ternary operator
let age = 17;
let eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);


//Array in javascript
// Creating an array are of two ways
//1. Using array literal
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

//2. Using arrray constructor
let vegetables = new Array("Carrot", "Potato", "Tomato", "Cabbage");
console.log(vegetables);

//changing the value of an array element
fruits[1] = "Grapes";
console.log(fruits);

//Array methods
//1. push() method - adds an element to the end of the array
fruits.push("pineapple");
console.log(fruits);

//2. pop" method - removes the first element of the array
fruits.pop();
console.log(fruits);

//3. shift() method - remove the first element of the array
fruits.shift();
console.log(fruits);

//4. unshift() method - adds an element to the beginning of the array
fruits.unshift("stawberry");
console.log(fruits);

//other array methods
//5. indexOf() method - returns the index of the first 
// occurance of a specified value in an array
let index = fruits.indexOf("Mango");
console.log(index); // output: 2

//6. includes() method - checks if array
// contains a specified value
let hasBanana = fruits.includes("Banana");
console.log(hasBanana); // Output: false

//7. length proprety - returns the number of
// elements in an array
let length = fruits.length;
console.log(length); // output: 4

//8. slice() method - return a shallow copy of a portion
// of an array into a new array object
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: [ 'Grapes', 'Mango' ]

//9. Map method - creates a new array populated with the results of 
// calling a provided function of every element in the calling array

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25

//10. Filter method - creates a new array with all elements that pass the test 
// implemented by the provided function

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

//11. Reduce method - executes a reducer function on each element of the array,
// resulting in a single output value
let sum = numbers.reduce(function (accumulator, currenValue) {
return accumulator + currenValue;
});
console.log(sum); // Output: 15

//another example of  reduce method when checking for how many times a number appears in an array
let numArray = [1, 2, 3, 4, 5, 1, 2, 1];

let frequency = numArray.reduce(function (acc, curr) {
  acc[curr] = (acc[curr] || 0) +1;
  return acc;
}, {});

console.log(frequency); // Output: { '1': 3, '2': 2, '3': 1, '4': 1, '5': 1 }

//correcting index by adding 1  to the index
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayIndex = 6;
const dayName = weekDays[dayIndex + 1]; // Adding 1 to correct the index
console.log(dayName); // Output: "Sunday"


//Spread Operator in Javascript
//The spread operator (...) allows an iterable such as an array or string to be
// expands in places where zero or more arguments (for function calls) or
// elements (for array literals) are expected, or an object expression to be expanded in places
// where zero or more key-value pairs (for object literals) are expected.
//Example of using the spread operator to copy an array
let originalArray = [1, 2, 3]

//Example of using the spread operator to merge two arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); //Output: [1, 2, 3, 4, 5, 6]

//Example of using the spread operator to copy and update an array
let numbersArray = [1, 2, 3];
let updateArray = [...numbersArray, 4];
console.log(updateArray); // Output: [1, 2, 3, 4]


//Functions in Javascript
function greet(name){
console.log("Hello, " + name +"!");
}
greet("Anthony");

//function with many parameters
function addNumbers(a,b){
  return a +b;
}
console.log(addNumbers(5,10));

//functions without parameters
function sayHello(){
  console.log("Hello!");
} 

//function with default parameters
function multiply(a,y=1){
  return a*y;
}
console.log(multiply(5,10));
console.log(multiply(5));//uses default value for y

//another example of defaukt parameters
function greetUser(name="Guest"){
  console.log("Welcome,"+ name+"!");
  console.log(`Welcome,${name}!`);//using backticks for display
}
greetUser();//usess default value for name  
greetUser("Anthony");//Overrides default value for name

//function expression
let sayHello1 = function(){
  console.log("Hello!");
};

sayHello();

let add=function(a,b){
  return a+b;
}
console.log(add(5,10));

//Higher order function is a function that takes another function as an argument and returns a functions as a result.

//Example of s higher-order function that takes a function as an argument


function welcomeUser(actions){
  actions();
}
function displayWelcomeMessage(){
  console.log("Welcome, user!");
}

welcomeUser(displayWelcomeMessage);

//more examples of higher-order functions
//food ordering system
function orderFood(food,callback){
  console.log(`Ordering ${food}...`);
  callback();//higher order function cos it stores a function innit
}

function foodReady(){
  console.log("Your food is ready!");//callback funtion
}

orderFood("pizza",foodReady);

//SetTimeout is a built in higher order function in Javascript that 
//allows you to execute a function after a specified delay
//it takes two arguments: the function to be executed and the delay in milliseconds.

setTimeout(function(){
  console.log("Delay has passed");
},2000);

//Scope in Functions
//Scope referrs to the accessibility of variables and functions in different parts of your code.
//In Javascript, there are two types of scope:global scope and local scope.

//Global scope
let globalVariable="I am a global variable";
function globalScopeExample(){
  console.log(globalVariable);//Accessible here
}

//Local scope
function localScopeExample(){
  let localVariable="I am a local variable";
console.log(localVariable);//Accesible here
}
console.log(globalVariable);//Accessible here

localScopeExample();//This will log the local variable

//Block scope
if(true){
  let blockScopeVariable="I am block scoped";
  console.log(blockScopeVariable);//Accessible here
}

  // Nested Scope
  function outerFunction() {
    let outerVariable = "I am from the outer function";
    function innerFunction() {
      let innerVariable = "I am from the inner function";
      console.log(outerVariable); // Accessible here
      console.log(innerVariable) // Accessible here
    }
    innerFunction();
    console.log(innerVariable); // Not Accessible here
  }

  //Closure in Functions
  //A closure in funtion that has access to its own scope, the outer function's scope,
  // and the global scope.
  // Closure are created every time a function is created, at the function creation time.

  //Example of a closure
  // example with a transaction counter
  function createTransactionCounter() {
  let InitialAmount = 5000;
  return addMoney = function(amount) {
    InitialAmount += amount;
    console.log(`New balance: ${InitialAmount}`);
   }
  }

let transactionCounter = createTransactionCounter();
transactionCounter(1000); // New balance: 6000
transactionCounter(500); // New balance: 6500

//Arrow Functions
//Arrow functions are a more concise way to write functions in Javascript. 
// They are often used for short, simple functions and callbacks.
const addition = (a, b) => a + b;
const square = (x) => x * x;