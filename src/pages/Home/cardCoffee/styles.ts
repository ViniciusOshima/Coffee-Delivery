import styled from 'styled-components'

export const ImgCardContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;

  display: flex;
  justify-content: center;

  margin-top: -2rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px 6px 36px;
  margin: 1rem 0;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CoffeeDatasContainer = styled.div`
  width: 5.0625rem;
  height: 1.3125rem;

  border-radius: 15%;
  margin: 0.75rem 0 1rem;

  background-color: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.44rem;
  font-weight: 700;
  text-align: center;
`

export const CoffeeNameContainer = styled.div`
  font-family: 'Baloo 2', cursive;
  font-size: 0.9rem;
  color: #403937;
  font-weight: 700;
  text-align: center;

  padding-bottom: 0.5rem;
`

export const CoffeeDescriptionContainer = styled.div`
  width: 13.5rem;
  height: 2.25rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;

  margin-bottom: 2.0625rem;
`

export const ButtomValueCardContainer = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
`
export const ValueCoffeeContainer = styled.div`
  display: flex;
  gap: 4px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ButtomsCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    display: flex;
    align-items: center;

    color: white;

    background-color: ${(props) => props.theme['purple-dark']};

    padding: 0.5rem;
    border-radius: 6px;
  }
`

export const HowManyContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  button {
    color: ${(props) => props.theme.purple};
    border: none;

    background-color: ${(props) => props.theme['base-button']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
`
