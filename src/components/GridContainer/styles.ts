import styled from 'styled-components'
import { IGridProps } from '.'

export const Grid = styled.div<IGridProps>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: ${(props) =>
    props.gridsm && `repeat(${props.gridsm}, 1fr)`};
  gap: ${(props) => props.gap && props.gap};

  img {
    width: 100%;
  }

  @media (min-width: 600px) {
    grid-template-columns: ${(props) =>
      props.gridmd && `repeat(${props.gridmd}, 1fr)`};
  }

  @media (min-width: 900px) {
    grid-template-columns: ${(props) =>
      props.gridlg && `repeat(${props.gridlg}, 1fr)`};
  }
`
