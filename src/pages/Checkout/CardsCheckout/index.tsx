import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonsDetailsContainer,
  CardContainer,
  DetailsContainer,
  HowManyContainer,
  InfoCardContainer,
  RemoveButtonContainer,
  ValueCoffeeCardContainer,
} from './styles'

import { useCoffee } from '../../../contexts/CoffeesContext'
import { formatCurrency } from '../../../utils/currency/format'

type CardCheckoutProps = {
  name: string
  photo: string
  id: string
  price: number
}

export function CardCheckout({ name, photo, id, price }: CardCheckoutProps) {
  const {
    handleAddCoffeeById,
    getQuantityById,
    handleDecrementCoffeeById,
    handleRemoveCoffeById,
  } = useCoffee()

  const quantity = getQuantityById(id)

  return (
    <CardContainer>
      <InfoCardContainer>
        <img src={photo} alt="" />
        <DetailsContainer>
          <h2>{name}</h2>

          <ButtonsDetailsContainer>
            <HowManyContainer>
              <button
                type="button"
                onClick={() => handleDecrementCoffeeById(id)}
              >
                <Minus size={14} />
              </button>

              <p>{quantity}</p>

              <button type="button" onClick={() => handleAddCoffeeById(id)}>
                <Plus size={14} />
              </button>
            </HowManyContainer>

            <RemoveButtonContainer
              type="button"
              onClick={() => handleRemoveCoffeById(id)}
            >
              <Trash size={16} />
              <p>REMOVER</p>
            </RemoveButtonContainer>
          </ButtonsDetailsContainer>
        </DetailsContainer>
      </InfoCardContainer>

      <ValueCoffeeCardContainer>
        {formatCurrency(price * quantity)}
      </ValueCoffeeCardContainer>
    </CardContainer>
  )
}
