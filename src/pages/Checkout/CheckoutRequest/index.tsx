import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
  ValuesCoffeeContainer,
} from './styles'
import { CardCheckout } from '../CardsCheckout'
import { useContext } from 'react'
import { CoffeesContext } from '../../../contexts/CoffeesContext'

const newAdressFormValidationSchema = zod.object({
  CEP: zod.number().min(8),
  Rua: zod.string().min(1, 'Informe sua rua'),
  Número: zod.number().min(1),
  Complemento: zod.string(),
  Bairro: zod.string().min(1, 'Informe seu bairro'),
  Cidade: zod.string().min(1, 'Informe sua cidade'),
  UF: zod.string().min(2).max(2),
})

type NewAdressFormData = zod.infer<typeof newAdressFormValidationSchema>

export function Checkout() {
  const { cart } = useContext(CoffeesContext)

  const { register, handleSubmit, reset } = useForm<NewAdressFormData>({
    resolver: zodResolver(newAdressFormValidationSchema),
    defaultValues: {
      CEP: undefined,
      Rua: '',
      Número: undefined,
      Complemento: '',
      Bairro: '',
      Cidade: '',
      UF: '',
    },
  })

  function handleSubmitAdress(data: NewAdressFormData) {
    console.log(data)

    reset()
  }

  return (
    <CheckoutContainer action="" onSubmit={handleSubmit(handleSubmitAdress)}>
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
              <div>
                <CEPInputContainer
                  type="number"
                  placeholder="CEP"
                  {...register('CEP', { valueAsNumber: true })}
                />
              </div>

              <div>
                <RuaInputInputContainer
                  type="text"
                  placeholder="Rua"
                  {...register('Rua')}
                />
              </div>

              <MoreThanOneInputContainer>
                <NumeroInputContainer
                  type="number"
                  placeholder="Número"
                  {...register('Número', { valueAsNumber: true })}
                />
                <ComplementoInputContainer
                  type="text"
                  placeholder="Complemento"
                  {...register('Complemento')}
                />
              </MoreThanOneInputContainer>

              <MoreThanOneInputContainer>
                <BairroInputContainer
                  type="text"
                  placeholder="Bairro"
                  {...register('Bairro')}
                />
                <CidadeInputContainer
                  type="text"
                  placeholder="Cidade"
                  {...register('Cidade')}
                />
                <UFInputContainer
                  type="text"
                  placeholder="UF"
                  {...register('UF')}
                />
              </MoreThanOneInputContainer>
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
              <ButtonPaymentContainer type="button">
                <CreditCard size={16} />
                <p>CARTÃO DE CRÉDITO</p>
              </ButtonPaymentContainer>

              <ButtonPaymentContainer type="button">
                <Bank size={16} />
                <p>CARTÃO DE DÉBITO</p>
              </ButtonPaymentContainer>

              <ButtonPaymentContainer type="button">
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
          {cart.map((coffee) => {
            return (
              <CardCheckout
                key={coffee.id}
                name={coffee.name}
                photo={coffee.photo}
                id={coffee.id}
                price={coffee.price}
              />
            )
          })}
          <RequestInfoContainer>
            <ValuesCoffeeContainer>
              <TotalItemsContainer>
                <p>Total de itens</p>
                <h3>R$ 33.30</h3>
              </TotalItemsContainer>

              <TotalItemsContainer>
                <p>entrega</p>
                <h3>R$ 3.50</h3>
              </TotalItemsContainer>

              <AllTotalContainer>
                <h3>Total</h3>
                <h3>R$ 33.50</h3>
              </AllTotalContainer>
            </ValuesCoffeeContainer>

            <ConfirmRequest>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </ConfirmRequest>
          </RequestInfoContainer>
        </CoffeesSelectedContainer>
      </CoffeesSelected>
    </CheckoutContainer>
  )
}
