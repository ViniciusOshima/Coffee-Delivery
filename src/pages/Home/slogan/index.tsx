import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import imgHome from '../../../assets/Imagem-coffee-home.svg'

import ExpressoTradicional from '../../../assets/coffees-img/Type=Expresso.svg'
import ExpressoAmericano from '../../../assets/coffees-img/Type=Americano.svg'
import ExpressoCremoso from '../../../assets/coffees-img/Type=Expresso Cremoso.svg'
import ExpressoGelado from '../../../assets/coffees-img/Type=Café Gelado.svg'
import CafeComLeite from '../../../assets/coffees-img/Type=Café com Leite.svg'
import Latte from '../../../assets/coffees-img/Type=Latte.svg'
import Capuccino from '../../../assets/coffees-img/Type=Capuccino.svg'
import Macchiato from '../../../assets/coffees-img/Type=Macchiato.svg'
import Mocaccino from '../../../assets/coffees-img/Type=Mochaccino.svg'
import ChocolateQuente from '../../../assets/coffees-img/Type=Chocolate Quente.svg'
import Cubano from '../../../assets/coffees-img/Type=Cubano.svg'
import Havaiano from '../../../assets/coffees-img/Type=Havaiano.svg'
import Arabe from '../../../assets/coffees-img/Type=Árabe.svg'
import Irlandes from '../../../assets/coffees-img/Type=Irlandês.svg'

import {
  CoffeeContainer,
  HomeContainer,
  HomeInfoContainer,
  HomeQualitiesContainer,
  HomeQualitiesContainerHalf,
  PackageContainer,
  ShoppingCartContainer,
  SloganContainer,
  TimerContainer,
  ContainerCoffee,
  // eslint-disable-next-line prettier/prettier
  ContainerWrapCoffee
} from './styles'
import { CardCoffee } from '../cardCoffee'

export function Home() {
  const coffee = [
    {
      name: 'Expresso Tradicional',
      data: ['TRADICIOAL'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      howMany: 1,
      photo: ExpressoTradicional
    },
    {
      name: 'Expresso Americano',
      data: ['TRADICIOAL'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      howMany: 1,
      photo: ExpressoAmericano
    },
    {
      name: 'Expresso Cremoso',
      data: ['TRADICIOAL'],
      description: 'Café expresso tradicional com espuma cremosa',
      howMany: 1,
      photo: ExpressoCremoso
    },
    {
      name: 'Expresso Gelado',
      data: ['TRADICIOAL', 'GELADO'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      howMany: 1,
      photo: ExpressoGelado
    },
    {
      name: 'Café com Leite',
      data: ['TRADICIOAL', 'COM LEITE'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      howMany: 1,
      photo: CafeComLeite
    },
    {
      name: 'Latte',
      data: ['TRADICIOAL', 'COM LEITE'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      howMany: 1,
      photo: Latte
    },
    {
      name: 'Capuccino',
      data: ['TRADICIOAL', 'COM LEITE'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      howMany: 1,
      photo: Capuccino
    },
    {
      name: 'Macchiato',
      data: ['TRADICIOAL', 'COM LEITE'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      howMany: 1,
      photo: Macchiato
    },
    {
      name: 'Mocaccino',
      data: ['TRADICIOAL', 'COM-LEITE'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      howMany: 1,
      photo: Mocaccino
    },
    {
      name: 'Chocolate Quente',
      data: ['ESPECIAL', 'COM LEITE'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      howMany: 1,
      photo: ChocolateQuente
    },
    {
      name: 'Cubano',
      data: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      howMany: 1,
      photo: Cubano
    },
    {
      name: 'Havaiano',
      data: ['ESPECIAL'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      howMany: 1,
      photo: Havaiano
    },
    {
      name: 'Árabe',
      data: ['ESPECIAL'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      howMany: 1,
      photo: Arabe
    },
    {
      name: 'Irlandês',
      data: ['ESPECIAL', 'ALCOÓLICO'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      howMany: 1,
      photo: Irlandes
    }
  ]

  return (
    <>
      <HomeContainer>
        <HomeInfoContainer>
          <SloganContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </SloganContainer>

          <HomeQualitiesContainer>
            <HomeQualitiesContainerHalf>
              <ShoppingCartContainer>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>

                <p>Compra simples e segura</p>
              </ShoppingCartContainer>

              <PackageContainer>
                <span>
                  <Package size={16} weight="fill" />
                </span>

                <p>Embalagem mantém o café intacto</p>
              </PackageContainer>
            </HomeQualitiesContainerHalf>

            <HomeQualitiesContainerHalf>
              <TimerContainer>
                <span>
                  <Timer size={16} weight="fill" />
                </span>

                <p>Entrega rápida e rastreada</p>
              </TimerContainer>

              <CoffeeContainer>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>

                <p>O café chega fresquinho até você</p>
              </CoffeeContainer>
            </HomeQualitiesContainerHalf>
          </HomeQualitiesContainer>
        </HomeInfoContainer>
        <img src={imgHome} alt="" />
      </HomeContainer>

      <ContainerCoffee>
        <h1>Nossos Cafés</h1>
        <ContainerWrapCoffee>
          {coffee.map(item => {
            return (
              <CardCoffee
                name={item.name}
                data={item.data}
                description={item.description}
                howMany={item.howMany}
                photos={item.photo}
              />
            )
          })}
        </ContainerWrapCoffee>
      </ContainerCoffee>
    </>
  )
}
