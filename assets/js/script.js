// recoger datos de api
const getDatos = async () => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
      const response = await fetch(url)
      const datos = await response.json()
      const filtrarDatos = datos.filter( (indice) => {
        return indice.id < 21
      }).map( (indice) => {
        return indice.title
      })
      resolve(filtrarDatos)
    } catch (err) {
      console.log(err);
    }
  })
}

// muestra mensaje (promesa)
const mensaje = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Información Enviada')
    }, 3000)
  })
}
const imprime = async () => {
  const resp = await mensaje()
  const resp2 = await getDatos()
  console.log(resp)
  console.log(resp2)
}
imprime()


