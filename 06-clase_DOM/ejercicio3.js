// Seleccion de elementos
const contenedorEl = document.querySelector(".contenedor")

for (let i = 0; i < 100; i++) {
    // Crear nuevo elemento
    const parrafo = document.createElement("p")

    // Agregar valor al nuevo elemento
    parrafo.innerHTML = "Este elemento se creo desde javascript"
  
    // Agregar nuevo elemento al DOM
    contenedorEl.appendChild(parrafo)
}