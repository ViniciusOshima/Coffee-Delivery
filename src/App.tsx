import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'

import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeesContextProvider } from './contexts/CoffeesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
