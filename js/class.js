// const Funky = parseFloat("99") + 1;
// console.log(Funky);

// const Funky2=typeof("99") + 1;

// function Addition(a, b, c,) {
//   c = a + b
//   console.log("Added ", c)
// }

// Addition(2, 3, 4)


function AvailableBalance(amount) {
  let balance = 0;
   balance = balance + amount;
  console.log("Added:", balance);
}
AvailableBalance(30000)

function returnedValue(a, b) {
  return a + b
}

let calledFunction = returnedValue(3, 6)
console.log("Returned Value: ", calledFunction)


function Calculator(a, b) {
  function Addition(a, b){
    return a + b
  }
  console.log(Addition(2, 4) )

  function Subtraction(a, b){
    return a - b
  }
  console.log(Subtraction(2, 4) )
}

Calculator()

let users = ['Adam', 'Boy', 'Chally', 'Dave']
console.log('Added a user! ', users.slice(1, 3))
users.splice(2, 0, 'Ben')
console.log(users)