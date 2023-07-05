import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import { Coffee, coffeesList } from '../mock/coffeesList'

type Cart = Array<
  Coffee & {
    quantity: number
  }
>

interface CoffeesContextType {
  cart: Cart
  totalValue: number
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

  const [totalValue, setTotalValue] = useState<number>(0)

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

  useEffect(() => {
    if (cart) {
      const quantityCoffees = cart.map((coffee) => {
        return coffee.quantity * coffee.price
      })

      let total = 0

      for (let i = 0; i < quantityCoffees.length; i++) {
        total += quantityCoffees[i]

        setTotalValue(total)
      }
    }
  }, [cart, totalValue])

  return (
    <CoffeesContext.Provider
      value={{
        cart,
        totalValue,

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
