//? Varibales en Javascript

//* Declaracion
let juguete;

//* Inicializacion o asignacion
juguete = "Max steal"

//* Declarando e inicializando al mismo tiempo
let heroe = "superman"

//------------------------------------------------------

//* Utilizando VAR
var nombre = "Juan";

//* Utilizando LET
let apellido = "Jose";
apellido = "Martinez"

//* Utilizando CONST
const edad = 25;
//! ERROR: edad = 30


// console.log(edad)

//------------------------------------------------------

//? Tipos de datos primitivos 

let pelota = "futbot" // STRING
let cantidad = 67 // NUMBER
let soltero = false // BOOLEAN
let indefinido = undefined // UNDEFINED
let nulo = null // NULL


//? Tipos de datos no primitivos

let arreglo = ["Juan", 45, true, "Martin"] // ARRAY

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
} // OBJECT

// console.log(persona.edad)

//------------------------------------------------------

//? Operadores aritmeticos

let numero1 = 10
let numero2 = 20

let suma = numero1 + numero2 // 30
let resta = numero1 - numero2 // -10
let cuenta = numero1 + numero1 / numero2 * numero1 // 1

// console.log(cuenta)


//? Operadores de comparacion y logicos

let numero3 = 10
let numero4 = 20

let mayor = numero3 > numero4 // false
let menor = numero3 < numero4 // true
let condicionCompleja = numero3 > numero4 || numero3 < numero4

let verdero = !false


// console.log(verdero)


//? Ejercicios

//* Ejercicio 1
const numero5 = 30
const numero6 = 20

// console.log(numero5 > numero6)

//* Ejercicio 2
const numero7 = 30
const numero8 = 30

// console.log(numero7 != numero8)

//* Ejercicio 3
const numero9 = 30
const numero10 = "30"

console.log(numero9 === numero10)


