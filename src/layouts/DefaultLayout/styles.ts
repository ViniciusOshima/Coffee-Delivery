import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
      height: 2.125rem;

      padding: 0.5rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme['yellow-light']};

      display: flex;
      align-items: center;

      color: ${(props) => props.theme['yellow-dark']};
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
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`