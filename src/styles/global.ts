import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};

    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  @media(max-width: 1200px) {
    html {
      font-size: 87.5%;
    }
  }
`
