import styled from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  z-index: 1;
  gap: 12px;
  position: absolute;
  bottom: 5.6vw;
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
