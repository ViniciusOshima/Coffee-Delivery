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
  ButtonShoppingCart
} from './styles'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface CardCoffeeType {
  name: string
  data: string[]
  description: string
  photos: string
}

export function CardCoffee({
  name,
  data,
  description,
  photos
}: CardCoffeeType) {
  const [howMany, setHowMany] = useState(1)

  const [howMuch, setHowMuch] = useState('9,90')

  function handleMinusAmount() {
    if (howMany > 1) {
      setHowMany(howMany - 1)
    }
  }

  function handlePlusAmount() {
    if (howMany < 3) {
      setHowMany(howMany + 1)

      switch (howMany) {
        case 1:
          setHowMuch('9,90')
          break
        case 2:
          setHowMuch('19,80')
          break
        case 3:
          setHowMuch('29,70')
      }
    }
  }

  useEffect(() => {
    switch (howMany) {
      case 1:
        setHowMuch('9,90')
        break
      case 2:
        setHowMuch('19,80')
        break
      case 3:
        setHowMuch('29,70')
    }
  }, [howMany])

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
          <h3>{howMuch}</h3>
        </ValueCoffeeContainer>

        <ButtomsCardContainer>
          <HowManyContainer>
            <button onClick={handleMinusAmount}>
              <Minus size={14} />
            </button>

            <p>{howMany}</p>

            <button onClick={handlePlusAmount}>
              <Plus size={14} />
            </button>
          </HowManyContainer>

          <ButtonShoppingCart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonShoppingCart>
        </ButtomsCardContainer>
      </ButtomValueCardContainer>
    </CardContainer>
  )
}
