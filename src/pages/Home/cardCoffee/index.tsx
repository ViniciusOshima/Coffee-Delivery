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
  // eslint-disable-next-line prettier/prettier
  ValueCoffeeContainer
} from './styles'
import { NavLink } from 'react-router-dom'

export function CardCoffee({ name, data, description, howMany, photos }) {
  return (
    <CardContainer>
      <ImgCardContainer>
        <img src={photos} alt="" />
      </ImgCardContainer>

      <CoffeeDatasContainer>
        <h2>{data}</h2>
      </CoffeeDatasContainer>

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
