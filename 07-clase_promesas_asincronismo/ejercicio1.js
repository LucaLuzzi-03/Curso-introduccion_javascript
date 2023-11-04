// Seleccion de elementos
const containerEl = document.querySelector(".container")
const buttonEl = document.getElementById("botonAgregar")

// Agregando eventos
buttonEl.addEventListener("click", async () => {
  // Obtener productos
  const products = await getProducts()

  // Validar productos
  if (!products) {
    alert("Productos no encontrados")
  }

  // Creando elementos y asignandoles valor
  products.map(product => {
    const list = document.createElement("ul")
    const title = document.createElement("li")
    const category = document.createElement("li")
    const price = document.createElement("li")
    const description = document.createElement("li")
    const image = document.createElement("li")
    const imageEl = document.createElement("img")

    title.textContent = `Title: ${product.title}`
    category.textContent = `Category: ${product.category}`
    price.textContent = `Price: $ ${product.price}`
    description.textContent = `description: ${product.description}`

    // Agregando imagen
    imageEl.src = product.image
    imageEl.style.width = "50px"
    imageEl.style.height = "50px"
    image.appendChild(imageEl)

    list.appendChild(title)
    list.appendChild(category)
    list.appendChild(price)
    list.appendChild(description)
    list.appendChild(image)

    // Insertarlo en el DOM
    containerEl.appendChild(list)
  })

})

// Funciones
async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()
  return products
}

const getProductsByPromise = new Promise((resolve, reject) => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})
