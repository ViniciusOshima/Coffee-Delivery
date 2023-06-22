import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'

import {
  AllTotalContainer,
  BairroInputContainer,
  ButtonPaymentContainer,
  ButtonSectionContainer,
  CEPInputContainer,
  CheckoutContainer,
  CidadeInputContainer,
  CoffeesSelected,
  CoffeesSelectedContainer,
  ConfirmRequest,
  ComplementoInputContainer,
  CompleteYourRequest,
  FormContainer,
  FormDescription,
  FormSection,
  MoreThanOneInputContainer,
  NumeroInputContainer,
  PaymentDescriptionContainer,
  PaymentSectionContainer,
  RequestInfoContainer,
  RuaInputInputContainer,
  TitlesCheckoutContainer,
  TotalItemsContainer,
  UFInputContainer,
  ValuesCoffeeContainer
} from './styles'
import { CardCheckout } from '../CardsCheckout'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourRequest>
        <TitlesCheckoutContainer>Complete seu pedido</TitlesCheckoutContainer>

        <div>
          <FormSection>
            <FormDescription>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormDescription>

            <FormContainer>
              <form action="">
                <div>
                  <CEPInputContainer type="number" placeholder="CEP" />
                </div>

                <div>
                  <RuaInputInputContainer type="text" placeholder="Rua" />
                </div>

                <MoreThanOneInputContainer>
                  <NumeroInputContainer type="number" placeholder="Número" />
                  <ComplementoInputContainer
                    type="text"
                    placeholder="Complemento"
                  />
                </MoreThanOneInputContainer>

                <MoreThanOneInputContainer>
                  <BairroInputContainer type="text" placeholder="Bairro" />
                  <CidadeInputContainer type="text" placeholder="Cidade" />
                  <UFInputContainer type="text" placeholder="UF" />
                </MoreThanOneInputContainer>
              </form>
            </FormContainer>
          </FormSection>

          <PaymentSectionContainer>
            <PaymentDescriptionContainer>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentDescriptionContainer>

            <ButtonSectionContainer>
              <ButtonPaymentContainer>
                <CreditCard size={16} />
                <p>CARTÃO DE CRÉDITO</p>
              </ButtonPaymentContainer>

              <ButtonPaymentContainer>
                <Bank size={16} />
                <p>CARTÃO DE DÉBITO</p>
              </ButtonPaymentContainer>

              <ButtonPaymentContainer>
                <Money size={16} />
                <p>DINHEIRO</p>
              </ButtonPaymentContainer>
            </ButtonSectionContainer>
          </PaymentSectionContainer>
        </div>
      </CompleteYourRequest>

      <CoffeesSelected>
        <TitlesCheckoutContainer>Cafés selecionados</TitlesCheckoutContainer>

        <CoffeesSelectedContainer>
          <CardCheckout />

          <RequestInfoContainer>
            <ValuesCoffeeContainer>
              <TotalItemsContainer>
                <p>Total de itens</p>
                <h3>R$29,70</h3>
              </TotalItemsContainer>

              <TotalItemsContainer>
                <p>entrega</p>
                <h3>R$3,50</h3>
              </TotalItemsContainer>

              <AllTotalContainer>
                <h3>Total</h3>
                <h3>R$33,20</h3>
              </AllTotalContainer>
            </ValuesCoffeeContainer>

            <ConfirmRequest>
              <button>CONFIRMAR PEDIDO</button>
            </ConfirmRequest>
          </RequestInfoContainer>
        </CoffeesSelectedContainer>
      </CoffeesSelected>
    </CheckoutContainer>
  )
}
