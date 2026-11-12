let Cart = ["Apples", "Banana", "Orange", "Grapes", "Mango"]

Cart.unshift("Pineapple")
console.log(Cart)

let userNames = ["Jude", "Possible", "Kells", "Frank"]
let available = "Possible"
if (available == "Possible") {
  console.log("User has an account.")
} else {
  console.log("User has no account")
}

const emails = ['exampl@example.com', 'exampl@example.com', 'exampl@example.com', 'exampl@example.com', 'exampl@example.com']
const EmailDataBase = [...emails]
console.log("Email Database: ", EmailDataBase)

if (EmailDataBase.includes('exampl@example.com')) {
  console.log("Email already exists in the database")
}

const checkEmail = EmailDataBase.indexOf('')
console.log(checkEmail)


// Rest Operator
let a = [1, 2, 3]
let b = ["Geoge", ...a]
console.log(b)

function PackedItems(...items){
  console.log(items)
}

PackedItems("Banana", "ManU's future", "Atletico")

// Spread Operator
let cartItems = ["Pen", "Laptop", "Phone", "Book"]
let cart = [...cartItems]
console.log("Items in my cart: ", cart)


// ForEach
let result = 0;
let sumITems = [1, 2, 3, 4, 5]

sumITems.forEach(myItems => result += myItems)
console.log("Sum of items: ", result)


// CartLog
let wristWatchUnitPrice = 50000
let quantity = [3]

quantity.forEach(totalPrice => wristWatchUnitPrice *= totalPrice)
console.log("Total Price Of Wrist Watch: ", wristWatchUnitPrice)

// Map
let multiply = [1, 2, 3]
console.log("Multiply by 2: ", multiply.map(value => value * 2))

// Filter
let filterSearch = ["Shoes", "Shirt", "Shorts", "Jacket", "Shoes"]
let product = filterSearch.filter(value => value === "Shoes")
console.log("Filter Product: ", product)