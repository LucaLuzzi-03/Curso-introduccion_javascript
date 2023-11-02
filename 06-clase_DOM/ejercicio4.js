// Seleccion de elementos
const formularioEl = document.getElementsByTagName("form");
const nombreEl = document.getElementById("nombre");
const contraseniaEl = document.getElementById("contrasenia");
const emailEl = document.getElementById("email");
const botonEl = document.querySelector("button");
const contenedorEl = document.querySelector("#contenedor");

// Agregar evento click
botonEl.addEventListener("click", () => {
  // Seleccionar valores del formulario
  const nombreValue = nombreEl.value;
  const contraseniaValue = contraseniaEl.value;
  const emailValue = emailEl.value;

  // Crear nuevos elementos
  const lista = document.createElement("ul");

  const nombreItem = document.createElement("li");
  const contraseniaItem = document.createElement("li");
  const emailItem = document.createElement("li");

  // Asignar valores a los items
  nombreItem.textContent = `Nombre: ${nombreValue}`;
  contraseniaItem.textContent = `Contraseña: ${contraseniaValue}`;
  emailItem.textContent = `Email: ${emailValue}`;

  // Agregar items a la lista
  lista.appendChild(nombreItem);
  lista.appendChild(contraseniaItem);
  lista.appendChild(emailItem);

  // Agregar lista al DOM
  contenedorEl.appendChild(lista);
})


