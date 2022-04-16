import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
  height: 100%;
  }

  body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  }

  * {
  margin: 0;
  }
 
  *, *::before, *::after {
  box-sizing: border-box;
  }
`
