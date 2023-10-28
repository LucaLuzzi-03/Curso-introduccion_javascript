//? METODOS

//* Metodos de array
//todo: .PUSH
const frutas = ["manzana", "Pera"]
// console.log(frutas)
frutas.push("Frutilla")
// console.log(frutas)

//todo: .POP
const frutas2 = ["manzana", "Pera"]
const ultimaFrutaTomada = frutas2.pop()
// console.log(frutas2)
// console.log(frutaTomada)

//todo: .SHIFT
const frutas3 = ["manzana", "Pera"]
const primeraFrutaTomada = frutas3.shift()
// console.log(frutas3)
// console.log(primeraFrutaTomada)

//todo: .UNSHIFT
const frutas4 = ["manzana", "Pera"]
frutas4.unshift("Frutilla")
// console.log(frutas4)

//todo: .LENGTH
const frutas5 = ["manzana", "Pera"]
// console.log(frutas5.length)


//todo: .MAP
const numeros1 = [1, 2, 3, 4, 5]
const numeros1Duplicados = numeros1.map(numero => numero * 2)
// console.log(numeros1Duplicados)

//todo: .FILTER
const numeros2 = [1, 2, 3, 4, 5]
const numerosMayoresA2 = numeros2.filter(numero => numero > 2)
const numerosImpares = numeros2.filter(numero => numero % 2 !== 0)
// console.log(numerosMayoresA2)
// console.log(numerosImpares)

//todo: .FIND
const numeros3 = [1, 2, 3, 4, 5]
const numeroSeleccionado = numeros3.find(numero => numero > 3)
// console.log(numeroSeleccionado)


//* Metodos de strings
const texto = "    Hola, MUNDO entero! 😁       "

//todo: .toUpperCase()
const textoMayusculas = texto.toUpperCase()

//todo: .toLowerCase()
const textoMinusculas = texto.toLowerCase()

//todo: .trim()
const textoSinEspaciosEnBlanco = texto.trim()

//todo: .replace()
const textoCambiado = texto.replace("MUNDO", "GALAXIA")
const textoCambiado2 = textoCambiado.replace("entero", "entera")

//todo: .substring()
const textoRecortado = texto.substring(10, 15)

// console.log(textoRecortado)


//* Metodos de objetos
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    altura: 1.80,
    peso: 80
  }

  //todo: Object.keys()
  const personaKeys = Object.keys(persona)

  //todo: Object.values()
  const personaValues = Object.values(persona)

  //todo: Object.entries()
  const personaEntries = Object.entries(persona)

  console.log(personaEntries)