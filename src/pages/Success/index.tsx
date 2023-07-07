import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgSuccess from '../../assets/Illustration-Success.svg'
import {
  AddressContainer,
  BorderInfoContainer,
  CurrencyDollarContainer,
  ImgSuccessContainer,
  InfoContainer,
  InfoImgContainer,
  IntroContainer,
  MapPinContainer,
  SpecificInfoContainer,
  SuccessContainer,
  TimerContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Success() {
  const { address, paymentMethod } = useContext(CoffeesContext)

  return (
    <>
      <SuccessContainer>
        <IntroContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que o café chegará até você</p>
        </IntroContainer>

        <InfoImgContainer>
          <BorderInfoContainer>
            <InfoContainer>
              <SpecificInfoContainer>
                <MapPinContainer>
                  <MapPin size={16} weight="fill" />
                </MapPinContainer>
                <div>
                  <AddressContainer>
                    <p>Entrega em</p>
                    <strong>
                      {address.Rua}, {address.Número}
                    </strong>
                  </AddressContainer>

                  <p>
                    {address.Bairro} - {address.Cidade}, {address.UF}
                  </p>
                </div>
              </SpecificInfoContainer>

              <SpecificInfoContainer>
                <TimerContainer>
                  <Timer size={16} weight="fill" />
                </TimerContainer>
                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </SpecificInfoContainer>

              <SpecificInfoContainer>
                <CurrencyDollarContainer>
                  <CurrencyDollar size={16} weight="fill" />
                </CurrencyDollarContainer>
                <div>
                  <p>Pagamento na entrega</p>
                  {paymentMethod.creditCard && (
                    <strong>{paymentMethod.creditCard}</strong>
                  )}

                  {paymentMethod.debitCard && (
                    <strong>{paymentMethod.debitCard}</strong>
                  )}

                  {paymentMethod.money && (
                    <strong>{paymentMethod.money}</strong>
                  )}
                </div>
              </SpecificInfoContainer>
            </InfoContainer>
          </BorderInfoContainer>

          <ImgSuccessContainer src={imgSuccess} alt="" />
        </InfoImgContainer>
      </SuccessContainer>
    </>
  )
}
