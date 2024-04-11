import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEEEEE',
  black: '#111',
  grey: '#333',
  lightGrey: '#A3A3A3',
  green: '#10AC84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

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
