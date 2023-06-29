import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonsDetailsContainer,
  CardContainer,
  DetailsContainer,
  HowManyContainer,
  InfoCardContainer,
  RemoveButtonContainer,
  ValueCoffeeCardContainer
} from './styles'

export function CardCheckout({ name, howMany, howMuch, photo }) {
  return (
    <CardContainer>
      <InfoCardContainer>
        <img src={photo} alt="" />
        <DetailsContainer>
          <h2>{name}</h2>

          <ButtonsDetailsContainer>
            <HowManyContainer>
              <button>
                <Minus size={14} />
              </button>

              <p>{howMany}</p>

              <button>
                <Plus size={14} />
              </button>
            </HowManyContainer>

            <RemoveButtonContainer>
              <Trash size={16} />
              <p>REMOVER</p>
            </RemoveButtonContainer>
          </ButtonsDetailsContainer>
        </DetailsContainer>
      </InfoCardContainer>

      <ValueCoffeeCardContainer>R$ {howMuch}</ValueCoffeeCardContainer>
    </CardContainer>
  )
}
