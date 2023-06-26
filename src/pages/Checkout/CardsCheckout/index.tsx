import { Minus, Plus, Trash } from 'phosphor-react'
import CafeExpresso from '../../../assets/coffees-img/Type=Expresso.svg'
import {
  ButtonsDetailsContainer,
  CardContainer,
  DetailsContainer,
  HowManyContainer,
  InfoCardContainer,
  RemoveButtonContainer,
  ValueCoffeeCardContainer
} from './styles'

export function CardCheckout() {
  return (
    <CardContainer>
      <InfoCardContainer>
        <img src={CafeExpresso} alt="" />
        <DetailsContainer>
          <h2>Expresso Tradicional</h2>

          <ButtonsDetailsContainer>
            <HowManyContainer>
              <button>
                <Minus size={14} />
              </button>

              <p>1</p>

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

      <ValueCoffeeCardContainer>R$ 9,90</ValueCoffeeCardContainer>
    </CardContainer>
  )
}
