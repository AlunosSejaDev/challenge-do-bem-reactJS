import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
 }

 body {
  font-family: 'Roboto', sans-serif;
  background-color: ${props => props.theme.background};
 }

 a {
  color: ${props => props.theme.white};
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover {
  color: ${props => props.theme.primaryHover};
}
`

function App ({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default App;