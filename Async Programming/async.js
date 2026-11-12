//const { reject } = require("async");

/*console.log("A");
console.log("B");
console.log("C");

let myCustomerPromise = new Promise((resolve, reject) => {
    let product = false

    if (product){
        resolve("Product is available")
    } else {
        reject("Product is not available")
    }
})

console.log(myCustomerPromise) // Promise { <pending> }

console.log(myCustomerPromise.then((result) => {
    console.log(result)
}).catch((err)=> {
    console.log("Error Message:, err")
}).finally(() => {
    console.log("Operation Ended")
}))
*/

// Async keyword before a function makes the function return a promise. Await keyword waits for a promise

async function usersData() {
    let users = fetch("https://jsonplaceholder.typicode.com/posts")

    try {
        let response = await users
        let data = await response.json()

        let name = data.map(post => post.name)
        console.log(name)
    } catch {
        console.error("No Internet connection")
    }
}

usersData()


/*async function usersData() {
    let users = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "My Post",
            body: "This is the content of my post",
            userId: 1
        })
    })

    try {
        let response = await users
        let data = await response.json()
        console.log(data)
    } catch {
        console.error("Not found")
    }
}

usersData() */






