// Welcome message to the program.
console.log("Bienvenido al sistema interactivo de mensajes!");

// Obtain both name and age from the user.
let userName = window.prompt("Ingresa tu nombre")
let userAge = parseInt(window.prompt("Ingresa tu edad"))

// Define the messages for each age.
let errorMessage = "No ingresaste una edad valida, intentalo mas tarde"
let underAgeMessage = "eres menor de edad, continua aprendiendo y mejorando tus habilidades en la programacion"
let overAgeMessage = "eres mayor de edad, preparate para grandes oportunidades en el mundo del software."

// Obtain the elements from the DOM, to show the user data.
const userNameElement = document.querySelector("#userName")
const userAgeElement = document.querySelector("#userAge")
const message = document.querySelector("#message")

// Validation if userAge is not a number or if is negative.
let validateAge = isNaN(userAge) || userAge < 1 || userAge > 100

// Validation for each case 
if (validateAge) {
  console.error(errorMessage);
  userNameElement.innerHTML = `Nombre: ${userName}`
  userAgeElement.innerHTML = "Edad: ERROR."
  message.innerHTML = "Mensaje: ERROR, Ingresaste una edad invalida."
} else if (userAge < 18) {
  alert(`Hola ${userName}, ` + underAgeMessage);
  userNameElement.innerHTML = `Nombre: ${userName}`
  userAgeElement.innerHTML = `Edad: ${userAge} Años`
  message.innerHTML = `Mensaje: ${underAgeMessage}`
} else {
  alert(`Hola ${userName}, ` + overAgeMessage)
  userNameElement.innerHTML = `Nombre: ${userName}`
  userAgeElement.innerHTML = `Edad: ${userAge} Años`
  message.innerHTML = `Mensaje: ${overAgeMessage}`
}

// Farewell message
alert("Gracias por haber usado el sistema interactivo de mensajes.")