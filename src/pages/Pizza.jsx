import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const { id } = useParams() // Obtiene el id desde la URL
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getPizza = async () => {
    try {
      setLoading(true)
       const response = await fetch(`http://localhost:5001/api/pizzas/${id}`) // Ruta dinámica con el id
      if (!response.ok) {
        throw new Error('No se pudo obtener la pizza')
      }
      const data = await response.json()

       setPizza({
        id: data.id,
        nombre: data.name,
        precio: data.price,
        ingredientes: data.ingredients,
        imagen: data.img,
        descripcion: data.desc,
        id: data.id,
      })
    } catch (error) {
      console.log(error)
      setError('No se han encontrado Pizzas')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) getPizza() // Solo ejecuta la petición si id está definido
  }, [id])

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <div className="container">
        {pizza && (
          <div key={pizza.id} className="card m-2" style={{ width: '20rem' }}>
            <img
              src={pizza.imagen}
              alt={pizza.nombre}
              className="card-img-top"
            />
            <div className="card-body">
              <h1 className="card-title">Pizza {pizza.nombre}</h1>
              <p>Precio: ${pizza.precio.toLocaleString('es-CL')}</p>
              <hr />
              <h4>Ingredientes:</h4>
              <ul>
                {pizza.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
              <h4>Descripción:</h4>
              <p>{pizza.descripcion}</p>
              <hr />
              <div className="text-center">
                <button className="btn btn-outline-dark m-2">
                  Agregar al Carrito
                </button>
                <button className="btn btn-outline-success m-2">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Pizza