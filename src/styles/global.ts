import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
 }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}
  }
`