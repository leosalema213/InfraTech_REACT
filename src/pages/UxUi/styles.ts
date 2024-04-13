import { createGlobalStyle } from 'styled-components'

export const UxCss = createGlobalStyle`
  .container{
    max-width: 600px;
    witdh: 100%;
    margin: 0 auto;
  }
  
  header{
    width: 100%;
    height: 100%;
    background:linear-gradient(180deg, #3a0436, #f890f1);
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding:20px 5.6vw 80px;
    position: relative; 
    justify-content: center;
    align-items: center;

    *{
      z-index: 1;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      p{
        margin-bottom: 12px;
      }
    }

    @media (min-width: 600px) {
      .content {
        width: 100%;
        
        h1{
          font-size: 60px;
        }
        p{
          font-size: 20px;
        }
      }

      .animation {
        width: 100%;
      }
    }

    @media (min-width: 900px) {
      flex-direction: row;

      .content {
        width: 50%;

        h1{
          font-size: 60px;
        }
        p{
          font-size: 24px;
        }
      }

      .animation {      
        width: 50%;
      }
    }
  }
 
`
