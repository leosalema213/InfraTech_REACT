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
    witdh: 100%;
    margin: 0 auto;

    p {
      line-height: 26px;
    }
  }

  .container-md {
    max-width: 700px;
    witdh: 100%;
    margin: 0 auto;
  }
`
