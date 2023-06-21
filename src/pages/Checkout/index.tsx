import { MapPinLine } from 'phosphor-react'

import {
  CheckoutContainer,
  CoffeesSelected,
  CompleteYourRequest
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourRequest>
        <h2>Complete seu pedido</h2>

        <div>
          <div>
            <div>
              <MapPinLine />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div>
              <form action="">
                <input type="number" placeholder="CEP" />
                <input type="text" placeholder="Rua" />

                <div>
                  <input type="number" placeholder="Número" />
                  <input type="text" placeholder="Complemento" />
                </div>

                <div>
                  <input type="text" placeholder="Bairro" />
                  <input type="text" placeholder="Cidade" />
                  <input type="text" placeholder="UF" />
                </div>
              </form>
            </div>
          </div>

          <div>Pagamento</div>
        </div>
      </CompleteYourRequest>

      <CoffeesSelected>
        <h2>Cafés selecionados</h2>
      </CoffeesSelected>
    </CheckoutContainer>
  )
}
