import { useEffect, useState } from 'react'
import CardPizza from '../components/CardPizza'
import Header from '../components/Header'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getPizzas = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5000/api/pizzas') 
      if (!response.ok) {
        throw new Error('No se pudieron obtener las pizzas')
      }
      const data = await response.json()

      // Mapeo de datos
      const pizzasInfo = data.map(pizza => ({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        ingredients: pizza.ingredients,
        img: pizza.img,
        desc: pizza.desc,
      }))

      setPizzas(pizzasInfo)
    } catch (error) {
      console.log(error)
      setError('No se han encontrado Pizzas')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      <Header />
      <h1 className="text-center mt-3">Nuestras Pizzas</h1>
      <hr />
      <div className="cards-container">
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}

        {pizzas.length > 0 &&
          pizzas.map(pizza => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          ))}
      </div>
    </>
  )
}

export default Home