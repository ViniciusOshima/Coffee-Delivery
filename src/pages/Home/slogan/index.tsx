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
  ContainerWrapCoffee,
  BackgroundHomeContainer,
  ImgContainer,
} from './styles'

import { CardCoffee } from '../cardCoffee'
import { coffeesList } from '../../../mock/coffeesList'

export function Home() {
  return (
    <>
      <BackgroundHomeContainer>
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
          <ImgContainer src={imgHome} alt="" />
        </HomeContainer>
      </BackgroundHomeContainer>

      <ContainerCoffee>
        <h1>Nossos Cafés</h1>
        <ContainerWrapCoffee>
          {coffeesList.map((coffee) => {
            return (
              <CardCoffee
                key={coffee.id}
                name={coffee.name}
                categories={coffee.categories}
                description={coffee.description}
                photo={coffee.photo}
                price={coffee.price}
                id={coffee.id}
              />
            )
          })}
        </ContainerWrapCoffee>
      </ContainerCoffee>
    </>
  )
}
