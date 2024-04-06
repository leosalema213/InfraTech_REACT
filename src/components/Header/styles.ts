import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 5.6vw;
  align-items: center;
  justify-content: center;
  position: relative;

  ul {
    top: 24px; 
    right: 12px;
  }

  @media (min-width: 600px) {
    font-size: 22px;
    width: 100%;
  }

  &::after {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }
`

export const span = styled.span``
