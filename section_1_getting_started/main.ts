const button = document.querySelector("button")!
const first_number = document.getElementById("num1")! as HTMLInputElement
const second_number = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number) {
    return num1 + num2
}

button.addEventListener("click", function() {
    console.log(add(+first_number.value, +second_number.value))
})