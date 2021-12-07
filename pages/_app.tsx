import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global-style';

const theme = {
  colors: {
    primary: '#F5B100',
    primary_hover: '#FFC819',
    secondary: '#333',
    subtitle: '#999',
    text_1: '#333',
    text_2: '#666',
    text_3: '#aaa',
    text_4: '#fff',
    background: '#222'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
