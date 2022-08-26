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
  position: relative;
  letter-spacing: 0.5px;
  padding: 0 10px;
}

a:after{
  content: "";
  position: absolute;
  background-color: ${props => props.theme.primaryHover};
  height: 6px;
  width: 0;
  left: 0;
  bottom: -10px;
  transition: 0.3s;
}

a:hover:after{
  width: 100%;
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