//? PROMESAS

//* .THEN y .CATCH
// const miPromesa = new Promise((resolve, reject) => {
//   fetch('https://fakestoreapi.com/products')
//             .then( res => res.json())
//             .then( data => resolve(data))
//             .catch( err => reject(err) );
// });


// const productos = miPromesa
//   .then( res => console.log(res))
//   .catch(err => console.log(err))

//* ASYNC/AWAIT
const obtenerProductos = async () => {
  const respuesta = await fetch('https://fakestoreapi.com/products')
  const productos = await respuesta.json()
  return productos
}

const productos = obtenerProductos()









