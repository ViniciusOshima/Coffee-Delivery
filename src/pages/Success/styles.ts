import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 70rem;

  margin: 0 auto;

  @media (max-width: 1110px) {
    max-width: 64rem;
  }

  @media (max-width: 920px) {
    max-width: 33rem;
  }
`
export const IntroContainer = styled.div`
  padding: 5rem 0 2.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.375rem;

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 3rem;
  }
`

export const InfoContainer = styled.div`
  border-radius: 6px 36px 6px 36px;

  width: 32.875rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  background: ${(props) => props.theme.background};
`

export const BorderInfoContainer = styled.div`
  background-image: linear-gradient(135deg, #dbac2c, #8047f8);

  border-radius: 6px 36px 6px 36px;

  padding: 1px;
`

export const SpecificInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }

  strong {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`

export const MapPinContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.background};

  background-color: ${(props) => props.theme.purple};
`

export const TimerContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.background};

  background-color: ${(props) => props.theme.yellow};
`

export const CurrencyDollarContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.background};

  background-color: ${(props) => props.theme['yellow-dark']};
`

export const ImgSuccessContainer = styled.img`
  width: 30.75rem;

  @media (max-width: 1110px) {
    width: 25rem;
  }
`
