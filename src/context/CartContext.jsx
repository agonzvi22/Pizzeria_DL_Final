import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Agregar producto al carrito
  const addToCart = pizza => {
    setCart(prevCart => {
      // Busca si la pizza ya existe en el carrito
      const pizzaExistente = prevCart.find(item => item.id === pizza.id)

      if (pizzaExistente) {
        // Si ya existe, solo suma 1 a su count
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item,
        )
      } else {
        // Si no existe, la agrega con count: 1
        return [...prevCart, { ...pizza, count: 1 }]
      }
    })
  }

  // Eliminar producto del carrito
  const removeFromCart = id => {
    setCart(
      prevCart =>
        prevCart
          .map(item =>
            item.id === id ? { ...item, count: item.count - 1 } : item,
          )
          .filter(item => item.count > 0), // Si count llega a 0, se elimina
    )
  }

  // Vaciar carrito
  const clearCart = () => {
    setCart([])
  }

  // Calcular total
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0,
  )

  // Formato Total
  const formattedTotal = totalPrice.toLocaleString('es-CL')

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        formattedTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}