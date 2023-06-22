import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  gap: 3.125rem;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const InfoCardContainer = styled.div`
  display: flex;
  gap: 20px;

  img {
    height: 4rem;
  }
`

export const HowManyContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  height: 2rem;

  background-color: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 130%;
  font-weight: 400;

  button {
    color: ${(props) => props.theme.purple};
    border: none;

    background-color: ${(props) => props.theme['base-button']};

    cursor: pointer;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 400;
  }
`

export const ButtonsDetailsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const RemoveButtonContainer = styled.button`
  width: 5.6875rem;
  height: 2rem;

  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme.purple};

  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  cursor: pointer;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    text-align: center;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const ValueCoffeeCardContainer = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: 130%;
  color: ${(props) => props.theme['base-text']};
`
