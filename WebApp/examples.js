let username;
console.log(username);

/*const name = "My name is Possible";
const age = "I am 26 years old";
const course = "MY favorite course is Javascript";
console.log(name, age, course);*/

const name = "Possible";
const age = 26;
const course = "Javascript";

console.log("My name is", name);
console.log("I am", age, "years old");
console.log("My favorite course is", course);


/*const score = 150;
if (score >= 50) {
    console.log("You Passed");
} else {
    console.log("You Failed")
}*/


const score = 65;

if (score >= 70) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Very Good");
} else if (score >= 50) {
    console.log("Good");
} else {
    console.log("Failed");
}



function myName() {
    console.log("My name is Possible");
    console.log("I am Learning Javascript");
}

myName();