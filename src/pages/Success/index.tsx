import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgSuccess from '../../assets/Illustration-Success.svg'
import {
  AddressContainer,
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

export function Success() {
  return (
    <>
      <SuccessContainer>
        <IntroContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que o café chegará até você</p>
        </IntroContainer>

        <InfoImgContainer>
          <InfoContainer>
            <SpecificInfoContainer>
              <MapPinContainer>
                <MapPin size={16} weight="fill" />
              </MapPinContainer>
              <div>
                <AddressContainer>
                  <p>Entrega em</p>
                  <strong>Rua João Daniel Martinelli, 102</strong>
                </AddressContainer>

                <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de Crédito</strong>
              </div>
            </SpecificInfoContainer>
          </InfoContainer>

          <ImgSuccessContainer>
            <img src={imgSuccess} alt="" />
          </ImgSuccessContainer>
        </InfoImgContainer>
      </SuccessContainer>
    </>
  )
}
