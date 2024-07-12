import { ThemeProvider } from 'styled-components'

import { TransactionsProvider } from './contexts/transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './pages/transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
