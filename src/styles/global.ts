import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', cursive;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }
`
