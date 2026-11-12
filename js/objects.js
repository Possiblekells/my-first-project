// Introduction to objects in Javascript
//Two ways of declaraing an object in Javascript
//1. Using object literal syntax
let person = {
  name: "John",
  age: 30,
  city: "New York",
}

//2. Using the object constructor
let person2 = new Object();
person2.name = "Jane";
person2.age = 25;
person2.city = "Los Angeles";
person2["country"] = "USA"; // Adding a new property using bracket notation

//Accessing object properties
console.log(person.name); // Output: John
console.log(person2["age"]); // Output: 25

//Modifying object properties
person.age = 31;
// person[1] = 32
console.log(person.age);


//Nested Objects
let user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
};
console.log(user.name);
console.log(user.address.city);

//Object Methods
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function() {
    console.log("car started");
  },
  stop: function() {
    console.log("car stopped");
  }
};
car.start();
car.stop();

//Object.keys() method - returns an array of a given object's own property names
let keys = Object.keys(car);
console.log(keys); // Output: ["make", "model", "year", "start", "stop"]

//Object.values() method - returns am array of a given object's own enumerable property values
let values = Object.values(car);
console.log(values); // OUtput: ["Toyota", "Camry", 2020, function, function]

//Object.entries() method - returns an array of a given object's own enumerable string-keyed
//  property [key, value] pairs
let entries = Object.entries(car);
console.log(entries); // Output: [["make", "Toyota"], ["model", "Cammry"],
//  ["year", 2020], ["start", function], ["stop", function]]

//Object.assign() method - copies the value of all enumerable own properties from one or more
// source objects to a target object
let target = {};
let source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // Output: {a: 1, b: 2 }

//Object.freeze() method - freezes an object, preventing new properties from being  added to it
// and making all existing properties as read-only
let frozenObject = Object.freeze({ name: "Frozen"});
frozenObject.name = "Not Frozen"; // This will not change the name property
console.log(frozenObject.name); // Output: "Frozen"

//Object.seal() method - seals an object, preventing new properties from being added to it
// and marking all existing properties as non-configurable
let sealedObject = Object.seal({ name: "Sealed" });
sealedObject.name = "Not Sealed"; // This will change the name property
console.log(sealedObject.name); // Output: "Not Sealed"

//Oblect.hasOwnProperty() method - returns a boolean indicating whether the object has the
// specified property as its own property
let hasProperty = car.hasOwnProperty("make");
console.log(hasProperty); // Output: true

//Object.is() method - determine whether two values are the same value
let isSame = Object.is(25, 25);
// console.log(prototype); // Output: true

//Object.getPrototypeOf() method - returns the prototype
// (i,e. the internal [[prototype]] property) of the specified object
let prototype = Object.getPrototypeOf(car);
// console.log(prototype); // Output {}

//Object.setPrototypeOf() method - sets the prototype (i.e. the internal [
// [Prototype]] property) of a specified object to another object or null
let newPrototype = { type: "Vehicle" };
Object.setPrototypeOf(car, newPrototype);
console.log(Object.getPrototypeOf(car)); // Output: { type: "Vehicle" }

/* Object.defineProperty() method - defines a new property directly on an object, or modifies an
existing property on an object, and returns the object */
let obj = {}
Object.defineProperty(obj, "property1", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(obj.property1); // Output: 42

//another example of the object.define property method
let pos = {};
Object.defineProperty(pos, "terminalId", {
  value: "123SQ455",
  writable: false, // The property cannot be changed
  enumerable: true, // The property will show up during enumeration of the properties
  configurable: false, // The property cannot be deleted or changed to an accessor property
});
console.log(pos.terminalId); // Output: "123SQ455"



const popularMovie2026 = {
  title: "Spider Man: Brand New Day",
  monthOfRelease: "July",
  cast: ["Tom Holland", "Zandeya"],
  rating: 5,
  review: function(){
    return ("The movie " + this.title + " has a rating of " + this.rating)
  //  return `The movie ${this.title} has a rating of ${this.rating}`
  }
}

// Accessing values in an Object
console.log(popularMovie2026["title"])
console.log(popularMovie2026.review())

// Changing the value in an Object
let changeValue = popularMovie2026.title = "The Gentlemen"
// console.log("A value is changed: ", changeValue)

//  Delete value in an Object
let deleteValue = delete popularMovie2026.monthOfRelease
// console.log("Deleted Value: ", deleteValue)
// console.log(popularMovie2026)

const carBrand = {
  name: "Benz",
  models: {
    sClassSeries: {
      VBoot: {
        colour: "Black",
        price: 100000
      },
    },
    aClassSeries: {
      AMG: {
        // colour: "Red",
        colour: ["Black", "White", "Red"],
        price: 500000
      }
    }
  }
}

//console.log("Brand: ", carBrand.models.aClassSeries.AMG.colour[1])
console.log("Brand: ", carBrand["models"] ["aClassSeries"] ["AMG"] ["colour"] [1])

// Object Methods
console.log("Object Keys: ", Object.keys(carBrand))
console.log(typeof(Object.keys(carBrand)))

console.log("Object Values: ", Object.values(carBrand))