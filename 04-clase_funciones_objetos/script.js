
//? Funciones
//* Declaracion e invocacion
function saludar5(nombre){
    console.log("Hola " + nombre);
}

saludar5("Martin");


//* Funcion que retorna un valor
function sumar(a,b){
    return a + b;
}

const resultado = sumar(6,8)


//? Formas de declarar funciones en Javascript
//* Funciones declarativas
function resta(a,b){
  return a - b;
}


//* Funciones expresivas 
const saludar = function (nombre){
  console.log("Hola " + nombre);
}


//* Funciones flecha (arrow functions)
const multiplicar1 = (a,b) => a * b;
const multiplicar2 = (a,b) => { 
  return a * b
};


//* Funciones anonimas
(function (a,b) {
  console.log(a + b)
})(5,5)


//* Funciones constructoras
function Persona(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

const juan = new Persona("Juan", "Pérez");
console.log(juan)


//? Objetos
const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 25,
  saludar: function(){
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}

console.log(persona.nombre)
persona.saludar()
persona.anioNacimiento = 2000
delete persona.anioNacimiento
console.log(persona)

//? Metodos
const frutas = ["Banana", "Pera", "Manzana"]
console.log(frutas)
frutas.push("Kiwi")
console.log(frutas)

console.log("Hola mundo")




