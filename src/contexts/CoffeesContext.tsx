import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import { Coffee, coffeesList } from '../mock/coffeesList'
import { useNavigate } from 'react-router-dom'

interface AdressFormData {
  CEP: number
  Rua: string
  Número: number
  Complemento: string
  Bairro: string
  Cidade: string
  UF: string
}

interface PaymentMethodProps {
  anyPayment?: boolean
  creditCard?: string
  debitCard?: string
  money?: string
}

type Cart = Array<
  Coffee & {
    quantity: number
  }
>

interface CoffeesContextType {
  cart: Cart
  totalValue: number
  paymentMethod: PaymentMethodProps
  address: AdressFormData
  quantityCoffees: number
  handleAddCoffeeById: (id: string) => void
  handleDecrementCoffeeById: (id: string) => void
  handleRemoveCoffeById: (id: string) => void
  getQuantityById: (id: string) => number
  submitAdress: (data: AdressFormData) => void
  handlePaymentMethod: (method: string) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodProps>({
    anyPayment: true,
  })

  const [address, setAddress] = useState<AdressFormData>({
    CEP: 0,
    Rua: '',
    Número: 0,
    Complemento: '',
    Bairro: '',
    Cidade: '',
    UF: '',
  })

  const [cart, setCart] = useState<Cart>([])

  const [totalValue, setTotalValue] = useState<number>(0)

  const [quantityCoffees, setQuantityCoffees] = useState(0)

  const navigate = useNavigate()

  function submitAdress(data: AdressFormData) {
    setAddress(data)

    navigate('/success')
  }

  function handlePaymentMethod(method: string) {
    switch (method) {
      case 'CARTÃO DE CRÉDITO':
        setPaymentMethod({ creditCard: 'CARTÃO DE CRÉDITO' })
        break
      case 'CARTÃO DE DÉBITO':
        setPaymentMethod({ debitCard: 'CARTÃO DE DÉBITO' })
        break
      case 'DINHEIRO':
        setPaymentMethod({ money: 'DINHEIRO' })
        break
      default:
        setPaymentMethod({ anyPayment: true })
    }
  }

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

    setTotalValue(0)
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
        return coffee.quantity
      })

      let total = 0

      for (let i = 0; i < quantityCoffees.length; i++) {
        total += quantityCoffees[i]

        setTotalValue(total * 9.9)
        setQuantityCoffees(total)
      }
    }
  }, [cart, totalValue])

  return (
    <CoffeesContext.Provider
      value={{
        cart,
        totalValue,
        paymentMethod,
        address,
        quantityCoffees,

        handleAddCoffeeById,
        handleDecrementCoffeeById,
        handleRemoveCoffeById,

        getQuantityById,

        submitAdress,
        handlePaymentMethod,
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
