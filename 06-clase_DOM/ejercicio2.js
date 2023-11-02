// Seleccion de elementos
const contenedorEl = document.querySelector(".contenedor")
const botonEl = document.getElementById("botonAgregar")

botonEl.addEventListener("click", () => {
  // Crear nuevo elemento
  const parrafo = document.createElement("p")

  // Agregar valor al nuevo elemento
  parrafo.innerHTML = "Este elemento se creo desde javascript"

  // Agregar nuevo elemento al DOM
  contenedorEl.appendChild(parrafo)
})