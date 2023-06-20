import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import expresso from '../../../assets/coffees-img/Type=Expresso.svg'

import {
  ButtomValueCardContainer,
  ButtomsCardContainer,
  CardContainer,
  CoffeeDatasContainer,
  CoffeeDescriptionContainer,
  CoffeeNameContainer,
  HowManyContainer,
  ImgCardContainer,
  ValueCoffeeContainer,
  CoffeeDatasContainerAround
} from './styles'
import { NavLink } from 'react-router-dom'

export function CardCoffee({ name, data, description, howMany, photos }) {
  return (
    <CardContainer>
      <ImgCardContainer>
        <img src={photos} alt="" />
      </ImgCardContainer>

      <CoffeeDatasContainerAround>
        <CoffeeDatasContainer>
          <h2>{data[0]}</h2>
        </CoffeeDatasContainer>

        {data[1] && (
          <CoffeeDatasContainer>
            <h2>{data[1]}</h2>
          </CoffeeDatasContainer>
        )}

        {data[2] && (
          <CoffeeDatasContainer>
            <h2>{data[2]}</h2>
          </CoffeeDatasContainer>
        )}
      </CoffeeDatasContainerAround>

      <CoffeeNameContainer>
        <h2>{name}</h2>
      </CoffeeNameContainer>

      <CoffeeDescriptionContainer>
        <p>{description}</p>
      </CoffeeDescriptionContainer>

      <ButtomValueCardContainer>
        <ValueCoffeeContainer>
          <p>R$</p>
          <h3>9,90</h3>
        </ValueCoffeeContainer>

        <ButtomsCardContainer>
          <HowManyContainer>
            <button>
              <Minus size={14} />
            </button>

            <p>{howMany}</p>

            <button>
              <Plus size={14} />
            </button>
          </HowManyContainer>

          <NavLink to="/Checkout" title="Checkout-buttom">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ButtomsCardContainer>
      </ButtomValueCardContainer>
    </CardContainer>
  )
}
