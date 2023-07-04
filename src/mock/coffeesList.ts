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
import { v4 } from 'uuid'

export interface Coffee {
  id: string
  name: string
  categories: string[]
  description: string
  photo: string
  price: number
}

export const coffeesList: Coffee[] = [
  {
    id: v4(),
    name: 'Expresso Tradicional',
    categories: ['TRADICIOAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    photo: ExpressoTradicional,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Expresso Americano',
    categories: ['TRADICIOAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    photo: ExpressoAmericano,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Expresso Cremoso',
    categories: ['TRADICIOAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    photo: ExpressoCremoso,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Expresso Gelado',
    categories: ['TRADICIOAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    photo: ExpressoGelado,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Café com Leite',
    categories: ['TRADICIOAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    photo: CafeComLeite,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Latte',
    categories: ['TRADICIOAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    photo: Latte,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Capuccino',
    categories: ['TRADICIOAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    photo: Capuccino,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Macchiato',
    categories: ['TRADICIOAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    photo: Macchiato,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Mocaccino',
    categories: ['TRADICIOAL', 'COM-LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    photo: Mocaccino,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Chocolate Quente',
    categories: ['ESPECIAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    photo: ChocolateQuente,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Cubano',
    categories: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    photo: Cubano,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Havaiano',
    categories: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    photo: Havaiano,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Árabe',
    categories: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    photo: Arabe,
    price: 9.9,
  },
  {
    id: v4(),
    name: 'Irlandês',
    categories: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    photo: Irlandes,
    price: 9.9,
  },
]
