import { Minus, Plus, ShoppingCart } from 'phosphor-react'

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
  CoffeeDatasContainerAround,
  ButtonShoppingCart,
} from './styles'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../../contexts/CoffeesContext'
import { Coffee } from '../../../mock/coffeesList'

export function CardCoffee({
  name,
  categories,
  description,
  photo,
  price,
  id,
}: Coffee) {
  const { handleAddCoffeeById, handleDecrementCoffeeById, getQuantityById } =
    useContext(CoffeesContext)

  const navigate = useNavigate()

  return (
    <CardContainer>
      <ImgCardContainer>
        <img src={photo} alt="" />
      </ImgCardContainer>

      <CoffeeDatasContainerAround>
        {categories.map((category) => {
          return (
            <CoffeeDatasContainer key={category}>
              <h2>{category}</h2>
            </CoffeeDatasContainer>
          )
        })}
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
          <h3>{price}</h3>
        </ValueCoffeeContainer>

        <ButtomsCardContainer>
          <HowManyContainer>
            <button onClick={() => handleDecrementCoffeeById(id)}>
              <Minus size={14} />
            </button>

            <p>{getQuantityById(id)}</p>

            <button onClick={() => handleAddCoffeeById(id)}>
              <Plus size={14} />
            </button>
          </HowManyContainer>

          <ButtonShoppingCart onClick={() => navigate('/checkout')}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonShoppingCart>
        </ButtomsCardContainer>
      </ButtomValueCardContainer>
    </CardContainer>
  )
}
