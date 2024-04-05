import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.div<Props>`
  max-width: 960px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  p {
    line-height: 26px;
  }

`

export const ContainerFlex = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: row;

    img {
      width: 50%;
    }
  }
`
export const ContainerGrid = styled(Container)`
  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: ${(props) =>
      props.gridrepeat != undefined
        ? `repeat(${props.gridrepeat}, 1fr)`
        : '1fr'};
    gap: 6px;
  }
`
