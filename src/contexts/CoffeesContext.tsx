import { ReactNode, createContext, useEffect, useState } from 'react'

import ExpressoTradicional from '../assets/coffees-img/Type=Expresso.svg'
import ExpressoAmericano from '../assets/coffees-img/Type=Americano.svg'
import ExpressoCremoso from '../assets/coffees-img/Type=Expresso Cremoso.svg'
import ExpressoGelado from '../assets/coffees-img/Type=Café Gelado.svg'
import CafeComLeite from '../assets/coffees-img/Type=Café com Leite.svg'
import Latte from '../assets/coffees-img/Type=Latte.svg'
import Capuccino from '../assets/coffees-img/Type=Capuccino.svg'
import Macchiato from '../assets/coffees-img/Type=Macchiato.svg'
import Mocaccino from '../assets/coffees-img/Type=Mochaccino.svg'
import ChocolateQuente from '../assets/coffees-img/Type=Chocolate Quente.svg'
import Cubano from '../assets/coffees-img/Type=Cubano.svg'
import Havaiano from '../assets/coffees-img/Type=Havaiano.svg'
import Arabe from '../assets/coffees-img/Type=Árabe.svg'
import Irlandes from '../assets/coffees-img/Type=Irlandês.svg'

export interface CoffeesSelectedType {
  name: string
  howMany: number
  howMuch: string
  photo: string
}

export interface AllCoffeesType {
  name: string
  data: string[]
  description: string
  photo: string
}

interface CoffeesContextType {
  coffee: AllCoffeesType
  coffeesSelected: CoffeesSelectedType
  valueAsString: string
  totalValueFrete: string
  frete: string
  newCoffeeSelected: (item: CoffeesSelectedType) => void
  howMuchIsTotal: (item: string) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children
}: CoffeesContextProviderProps) {
  const coffee: AllCoffeesType[] = [
    {
      name: 'Expresso Tradicional',
      data: ['TRADICIOAL'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      photo: ExpressoTradicional
    },
    {
      name: 'Expresso Americano',
      data: ['TRADICIOAL'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      photo: ExpressoAmericano
    },
    {
      name: 'Expresso Cremoso',
      data: ['TRADICIOAL'],
      description: 'Café expresso tradicional com espuma cremosa',
      photo: ExpressoCremoso
    },
    {
      name: 'Expresso Gelado',
      data: ['TRADICIOAL', 'GELADO'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      photo: ExpressoGelado
    },
    {
      name: 'Café com Leite',
      data: ['TRADICIOAL', 'COM LEITE'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      photo: CafeComLeite
    },
    {
      name: 'Latte',
      data: ['TRADICIOAL', 'COM LEITE'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      photo: Latte
    },
    {
      name: 'Capuccino',
      data: ['TRADICIOAL', 'COM LEITE'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      photo: Capuccino
    },
    {
      name: 'Macchiato',
      data: ['TRADICIOAL', 'COM LEITE'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      photo: Macchiato
    },
    {
      name: 'Mocaccino',
      data: ['TRADICIOAL', 'COM-LEITE'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      photo: Mocaccino
    },
    {
      name: 'Chocolate Quente',
      data: ['ESPECIAL', 'COM LEITE'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      photo: ChocolateQuente
    },
    {
      name: 'Cubano',
      data: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      photo: Cubano
    },
    {
      name: 'Havaiano',
      data: ['ESPECIAL'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      photo: Havaiano
    },
    {
      name: 'Árabe',
      data: ['ESPECIAL'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      photo: Arabe
    },
    {
      name: 'Irlandês',
      data: ['ESPECIAL', 'ALCOÓLICO'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      photo: Irlandes
    }
  ]

  const [coffeesSelected, setCoffeesSelected] = useState<CoffeesSelectedType[]>(
    []
  )

  const [totalValue, setTotalValue] = useState(0)

  const [valueAsString, setValueAsString] = useState('0,0')

  const [frete, setFrete] = useState('0,0')

  const [totalValueFrete, setTotalValueFrete] = useState('0')

  function newCoffeeSelected(item: CoffeesSelectedType) {
    setCoffeesSelected([
      ...coffeesSelected,
      {
        name: item.name,
        photo: item.photo,
        howMany: item.howMany,
        howMuch: item.howMuch
      }
    ])
  }

  function howMuchIsTotal(item: string) {
    const valueAsNumber = Number(item.replace(',', '.'))
    setTotalValue(totalValue + valueAsNumber)
  }

  useEffect(() => {
    if (totalValue) {
      setValueAsString(String(totalValue).replace('.', ',') + '0')
      setTotalValueFrete(String(totalValue + 3.5).replace('.', ',') + '0')
    }

    if (coffeesSelected.length > 0) {
      setFrete('3,50')
    } else {
      setFrete('0,0')
    }
  }, [coffeesSelected.length, totalValue])

  return (
    <CoffeesContext.Provider
      value={{
        coffee,
        newCoffeeSelected,
        coffeesSelected,
        howMuchIsTotal,
        valueAsString,
        totalValueFrete,
        frete
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
