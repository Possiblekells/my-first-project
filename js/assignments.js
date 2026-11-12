function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}
 
function divide(a, b){
  return a / b;
}

function multiply(a, b){
  return a * b;
}
 
console.log(add(5, 5) );
console.log(subtract(10, 5) );
console.log(multiply(5, 2) );
console.log(divide(6, 2) );


const jambCandidates = [
  {name: "John", score: 200},
  {name: "Dave", score: 170},
  {name: "Frank", score: 250},
  {name: "Ella", score: 160},
  {name: "Possible", score: 280},
  {name: "Kelvin", score: 215},
  {name: "Josh", score: 190},
  {name: "James", score: 180},
  {name: "Afam", score: 205},
  {name: "Presh", score: 195},
  {name: "Dinma", score: 210}
]

const successfulCandidates = [];
let count = 0;

for (let x = 0; x < jambCandidates.length; x++) {
  if (jambCandidates[x].score > 200) {
    successfulCandidates.push(jambCandidates[x].name);
    count++;
  }
}

if (count > 0) {
  console.log("These are the students who scored more than 200 in Jamb:");

  for (let x = 0; x < successfulCandidates.length; x++) {
    console.log("" + successfulCandidates[x]);
  }

  console.log("Number of candidate who scored above 200: " + count);
} else {
  console.log("No candidate scored above 200 in Jamb.");
}