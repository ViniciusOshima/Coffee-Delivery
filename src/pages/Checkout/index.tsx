import { MapPinLine } from 'phosphor-react'

import {
  BairroInputContainer,
  CEPInputContainer,
  CheckoutContainer,
  CidadeInputContainer,
  CoffeesSelected,
  ComplementoInputContainer,
  CompleteYourRequest,
  FormContainer,
  FormDescription,
  FormSection,
  MoreThanOneInputContainer,
  NumeroInputContainer,
  RuaInputInputContainer,
  UFInputContainer
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourRequest>
        <h2>Complete seu pedido</h2>

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

          <div>Pagamento</div>
        </div>
      </CompleteYourRequest>

      <CoffeesSelected>
        <h2>Cafés selecionados</h2>
      </CoffeesSelected>
    </CheckoutContainer>
  )
}
