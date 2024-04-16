import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container{
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

  .container-md {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  
.optionDefault {
 display: none;
}

`
