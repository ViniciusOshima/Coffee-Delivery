import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 0;

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
      display: flex;
    }
  }
`

export const LocationContainer = styled.div`
  height: 2.125rem;

  display: flex;
  align-items: center;
  gap: 4px;

  background-color: ${(props) => props.theme['purple-light']};

  padding: 0.5rem;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};

  p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const ButtonCart = styled.div`
  height: 2.125rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;

  color: ${(props) => props.theme['yellow-dark']};
`

export const QuantinyCoffeesOnCart = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-left: -8px;
  margin-top: -8px;

  background-color: ${(props) => props.theme['yellow-dark']};

  color: ${(props) => props.theme.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
