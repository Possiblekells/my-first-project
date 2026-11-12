// console.log(document.all)

let titleHeader = document.getElementById('header')
titleHeader.innerHTML = "H1 Text"
console.log(titleHeader)


let button = document.getElementsByClassName("btn")
button[1].innerHTML = "Changed State"

// Styling
button[1].style.backgroundColor = "red"
button[1].style.color = "white"
button[1].style.border = "0px"
button[1].style.padding = "10px 24px"


let input = document.querySelectorAll("#content p")
console.log(input.length)

input.forEach(input => input.style.fontSize = "120px")

// textContent: Allows you to read or change the text inside an HTML element.
// innerHTML: lets you to read or replace the Html markup inside an element.
// innerText: also reads or changes an elements text, but it behaves more like the text a 


/*let inputStyle = document.getElementsByClassName('input')
inputStyle.style.padding = "10px 24px"
inputStyle.style.border = "none"
inputStyle.style.backgroundColor = "white"*/


let tagName = document.getElementsByTagName('section')
tagName[0].classList.add('Greet')
tagName[0].classList.remove('Greet')
console.log(tagName)


let userInput = document.getElementById('password')
let ToggleBtn = document.getElementById('passwordBtn')

ToggleBtn.addEventListener('click', ()=> {
  if (userInput.type == "password"){
    userInput.type ="text"
    ToggleBtn.textContent = "Hide Button"
  } else {
    userInput.type = "password"
    ToggleBtn.textContent = "Show Password"
  }
})

