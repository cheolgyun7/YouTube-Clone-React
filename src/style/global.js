import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
html {
font-family: "Roboto","Arial",sans-serif;
}
a{
  text-decoration: none;
  color: inherit;
}
button {
  cursor: pointer;
}
`

export default GlobalStyle
