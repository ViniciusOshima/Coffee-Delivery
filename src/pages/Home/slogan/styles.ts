import styled from 'styled-components'

import bgHome from '../../../assets/Background-Home.svg'

export const ImgContainer = styled.img`
  width: 29.75rem;

  @media (max-width: 980px) {
    width: 26rem;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  padding: 5.875rem 30px 6.75rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 980px) {
    padding: 3rem 30px 4rem;
  }

  @media (max-width: 940px) {
    flex-direction: column;

    padding: 5.875rem 30px 6.75rem;
  }
`

export const BackgroundHomeContainer = styled.div`
  width: 100vw;
  height: 77vh;

  background-image: url(${bgHome});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: #272221;

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;

    @media (max-width: 940px) {
      text-align: center;
    }
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: #403937;

    @media (max-width: 940px) {
      text-align: center;
    }
  }
`

export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  width: 36.75rem;
`

export const HomeQualitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  align-items: flex-start;
`

export const HomeQualitiesContainerHalf = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: center;
`

const QualitiesDefault = styled.div`
  width: 14.4375rem;
  height: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  text-align: center;

  span {
    border-radius: 100%;
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    @media (max-width: 560px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`

export const ShoppingCartContainer = styled(QualitiesDefault)`
  span {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 1200px) {
    width: 15rem;
  }
`

export const PackageContainer = styled(QualitiesDefault)`
  width: 18.375rem;

  span {
    background-color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 1200px) {
    width: 20rem;
  }
`

export const TimerContainer = styled(QualitiesDefault)`
  span {
    background-color: ${(props) => props.theme.yellow};
  }

  @media (max-width: 1200px) {
    width: 15rem;
  }
`

export const CoffeeContainer = styled(QualitiesDefault)`
  width: 18.375rem;

  span {
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 1200px) {
    width: 20rem;
  }
`

export const ContainerCoffee = styled.div`
  font-family: 'Baloo 2', cursive;
  font-size: 1rem;
  line-height: 130%;
  color: #403937;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 4.125rem;
    width: 100%;

    @media (max-width: 980px) {
      padding-left: 30px;
    }
  }

  @media (max-width: 980px) {
    max-width: 60rem;
  }
`

export const ContainerWrapCoffee = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  max-width: 70rem;
`
