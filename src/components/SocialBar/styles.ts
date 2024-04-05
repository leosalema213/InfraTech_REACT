import styled from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  z-index: 1;
  gap: 20px;
  position: absolute;
  bottom: 5.6vw;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 600px) {
    flex-direction: column;
`
export const Li = styled.li`
  color: #fff;
  list-style: none;

  &:hover {
    transform: scale(1.2);
    transition: transform ease-in 0.2s;
  }
`
export const Img = styled.img`
  color: #fff;
  list-style: none;
`
