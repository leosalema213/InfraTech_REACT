import styled from 'styled-components'
import { IHeaderProps } from '.'

export const HeaderContainer = styled.div<IHeaderProps>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.background && props.background};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap};
  padding: 5.6vw;
  align-items: ${(props) => props.align && props.align};
  justify-content: ${(props) => props.justify && props.justify};
  position: relative; 

  &>div {
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  ul {
    top: 24px; 
    right: 12px;
  }

  @media (min-width: 600px) {
    row-gap: 40px;
    font-size: 22px;
    width: 100%;
  }
  
  &::after {
    background-color: rgba(0, 0, 0, 
      ${(props) => props.after == "1" ? "0.4" :  "0.7" });
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }
`

export const span = styled.span``
