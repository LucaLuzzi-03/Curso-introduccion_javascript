//? Condicionales

//* If Statement
const nombre = "Emiliano";
const apellido = "Pérez";

if (nombre == "Juan" && apellido == "Pérez") {
    console.log("Bienvenido " + nombre + " " + apellido);
} else {
    console.log("No eres bienvenido " + nombre + " " + apellido);
}


//* Else if Statement
if (nombre == "Juan" && apellido == "Pérez") {
    console.log("Bienvenido " + nombre + " " + apellido + "😁");
} else if (nombre == "Pedro" && apellido == "Pérez") {
    console.log("Bienvenido " + nombre + " " + apellido + "🥰");
} else {
    console.log("No eres bienvenido " + nombre + " " + apellido + "😔");
}


//* Switch statement
const edad = 14;

switch (edad) {
    case 18:
        console.log("Usted es mayor de edad 😁");
        break;
    case 19:
        console.log("Usted es mayor de edad 🥰");
        break;
    case 20:
        console.log("Usted es mayor de edad 😀");
        break;
    case 21:
        console.log("Usted es mayor de edad 😎");
        break;
    default:
        console.log("Usted no es mayor de edad 😣");
        break;
}


//* Ternary Operator
const edad_2 = 26;
const soltero = false;

const mayorDeEdad = edad_2 >= 18 ? "Usted es mayor de edad 😁" : "Usted no es mayor de edad 😣";
const esSoltero = soltero === true ? 1 : 0;

console.log(mayorDeEdad);
console.log(esSoltero);


//? Bucles

//* bucle FOR
for (let i = 1; i <= -10; i += 2) {
    console.log(i);
}


//* bucle WHILE
let i = 10;

while (i <= 10) {
    console.log(i);
    i += 2;
}


//* bucle DO WHILE
let y = 12;

do {
    console.log(y);
    y++;
} while (y <= 10);


//* bucle FOR OF
const personas = ["Juan", "Pedro", "Emiliano"];

for (let persona of personas) {
    console.log(persona);
}


//* bucle FOR IN
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 18
}

for (let propiedad in persona) {
    console.log(persona[propiedad]);
}
