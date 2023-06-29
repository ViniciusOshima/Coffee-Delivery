import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import imgHome from '../../../assets/Imagem-coffee-home.svg'

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
import { useContext } from 'react'
import {
  AllCoffeesType,
  CoffeesContext
} from '../../../contexts/CoffeesContext'

export function Home() {
  const { coffee } = useContext(CoffeesContext)

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
          {coffee.map((coffee: AllCoffeesType) => {
            return (
              <CardCoffee
                name={coffee.name}
                data={coffee.data}
                description={coffee.description}
                photo={coffee.photo}
              />
            )
          })}
        </ContainerWrapCoffee>
      </ContainerCoffee>
    </>
  )
}
