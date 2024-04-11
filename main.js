const API_URL= 'https://jsonplaceholder.typicode.com/users'

// IMPRIMIR POR CONSOLA LA LISTA (ARRAY) DE USUARIOS
axios
  .get(API_URL)
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));


// Imprimir por consola solo el nombre de los usuarios.

axios
  .get(API_URL)
  .then((res) => {

    for (let eachUser of res.data) {
      console.log(eachUser.name)
    }
  
  })
  .catch((err) => console.error(err));


// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array).

let users = []

axios
  .get(API_URL)
  .then((res) => {
    users = res.data
    console.log(users)
  })
  .catch((err) => console.error(err))


  

  // Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado


  function showUsers () {
   console.log(users)
  }

  // Crea un botón que cuando lo cliques ejecute la función que habías creado

  let boton = document.getElementById('btn')
  boton.addEventListener('click', showUsers)

  // Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML)

  let pintarEnPantalla = document.getElementById('text')

    function mostrarUsuariosDOM () {
      for (let usuario of users) {
        pintarEnPantalla.innerHTML += ' <br> ' + usuario.name
      }
    }
  boton.addEventListener('click', mostrarUsuariosDOM)
  





// EJERCICIOS EXTRAS

  const API_URL2 = 'https://dog.ceo/api/breeds/list/all'

// Imprimir por consola la lista de razas de todos los perros

axios
  .get(API_URL2)
  .then((res) => console.log(res.data.message))
  .catch((err) => console.error(err))



  axios
  .get(API_URL2)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))


