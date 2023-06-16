import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.5rem;

  padding: 5.875rem 0 6.75rem;
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
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: #403937;
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

  span {
    border-radius: 100%;
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
  }
`

export const ShoppingCartContainer = styled(QualitiesDefault)`
  span {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PackageContainer = styled(QualitiesDefault)`
  width: 18.375rem;

  span {
    background-color: ${(props) => props.theme['base-text']};
  }
`

export const TimerContainer = styled(QualitiesDefault)`
  span {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const CoffeeContainer = styled(QualitiesDefault)`
  width: 18.375rem;

  span {
    background-color: ${(props) => props.theme.purple};
  }
`
