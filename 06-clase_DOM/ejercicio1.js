// Seleccion de elementos
const contenedorEl = document.querySelector('.contenedor')

// Crear un elemento
const parrafo = document.createElement('p')

// Agregarle un valor o contenido
parrafo.innerHTML = "Este es una etiqueta parrafo creada dinamicamente desde Javascript"

parrafo.style.fontSize = "32px"
parrafo.style.color = "#FF0000"
parrafo.style.border = "1px solid black"
parrafo.style.padding = "16px"

// Agregandole elemento hijo a elemento padre
contenedorEl.appendChild(parrafo)