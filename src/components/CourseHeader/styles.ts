import styled from 'styled-components'
import { ICourseHeaderProps } from '.'

export const HeaderContainer = styled.header<ICourseHeaderProps>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.background && props.background};
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

`
