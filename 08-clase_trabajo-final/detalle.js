
//? Variables
// Seleccion de elementos HTML
const cardInfoContainer = document.querySelector('.cardInfo_conatiner');

//? Funciones
// Declarar funcion FETCH para insertar nuestros productos en pantalla
const getProductById = async() => {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')

  const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await resp.json()

    // Crear estructura HTML para la CARD
    const card = `
      <div class="card">
        <img src="${data.image}" alt="${data.title}">

        <div class="card-info">
          <span class="card-info_title">${data.title}</span>
          <p>${data.description}</p>
          <p>${data.category}</p>
          <p>$ ${data.price}</p>
        </div>

        <a href="index.html">Volver</a>
      </div>
    `

    // Insertar CARDS de productos en pantala
    cardInfoContainer.insertAdjacentHTML('beforeend', card)
}

//? Eventos
// Cargar todos los productos en pantalla
window.addEventListener('DOMContentLoaded', getProductById)