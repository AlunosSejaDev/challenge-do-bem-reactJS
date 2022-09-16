import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
 }

 body{
  font-family: 'Roboto', sans-serif;
  background-color: ${props => props.theme.background};
 }
`

export default function App ({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
