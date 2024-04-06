import styled from 'styled-components'
import { Props } from '.'

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  p {
    line-height: 26px;
  }

  img {
    width: 100%;
  }

  @media (min-width: 600px) {
    flex-direction: row;

     img {
      width: 50%;
    }
  }
`
export const ContainerGrid = styled.div<Props>`
  p {
    line-height: 26px;
  }

  img {
    width: 100%;
  }

  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: ${(props) =>
      props.gridrepeat != undefined
        ? `repeat(${props.gridrepeat}, 1fr)`
        : '1fr'};
    gap: 6px;
  }
`
