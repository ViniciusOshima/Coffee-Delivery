import { ReactNode, createContext, useState, useContext } from 'react'
import { Coffee, coffeesList } from '../mock/coffeesList'

type Cart = Array<
  Coffee & {
    quantity: number
  }
>

interface CoffeesContextType {
  cart: Cart
  handleAddCoffeeById: (id: string) => void
  handleDecrementCoffeeById: (id: string) => void
  handleRemoveCoffeById: (id: string) => void
  getQuantityById: (id: string) => number
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [cart, setCart] = useState<Cart>([])

  const handleAddCoffeeById = (id: string) => {
    const coffeeOnCart = cart.find((coffee) => coffee.id === id)

    if (!coffeeOnCart) {
      const coffee = coffeesList.find((coffee) => coffee.id === id)

      if (coffee) {
        setCart((prevCart) => [
          ...prevCart,
          {
            ...coffee,
            quantity: 1,
          },
        ])
      }

      return
    }

    if (coffeeOnCart) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((prevCoffee) => {
          if (prevCoffee.id === coffeeOnCart.id) {
            const newQuantity = prevCoffee.quantity + 1
            const newCoffee = { ...prevCoffee, quantity: newQuantity }

            return newCoffee
          }

          return prevCoffee
        })

        return updatedCart
      })
    }
  }

  const getQuantityById = (id: string) => {
    return cart.find((coffee) => coffee.id === id)?.quantity || 0
  }

  const handleRemoveCoffeById = (id: string) => {
    setCart((preCart) => preCart.filter((coffee) => coffee.id !== id))
  }

  const handleDecrementCoffeeById = (id: string) => {
    const coffeeOnCart = cart.find((coffee) => coffee.id === id)

    if (coffeeOnCart) {
      if (coffeeOnCart.quantity === 1) {
        handleRemoveCoffeById(id)
        return
      }

      setCart((prevCart) => {
        const updatedCart = prevCart.map((prevCoffee) => {
          if (prevCoffee.id === coffeeOnCart.id) {
            const newQuantity = prevCoffee.quantity - 1
            const newCoffee = { ...prevCoffee, quantity: newQuantity }

            return newCoffee
          }

          return prevCoffee
        })

        return updatedCart
      })
    }
  }

  return (
    <CoffeesContext.Provider
      value={{
        cart,
        handleAddCoffeeById,
        handleDecrementCoffeeById,
        handleRemoveCoffeById,

        getQuantityById,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

export const useCoffee = () => {
  const context = useContext(CoffeesContext)
  return context
}
