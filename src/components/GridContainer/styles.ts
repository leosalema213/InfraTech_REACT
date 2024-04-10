import styled from 'styled-components'
import { Props } from '.'

export const Grid = styled.div<Props>`
  img {
    width: 100%;
  }
    grid-template-columns: ${(props) =>
      props.gridsm &&`repeat(${props.gridsm}, 1fr)`};

  gap: ${(props) => props.gap && props.gap};

  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: ${(props) =>
      props.gridmd &&`repeat(${props.gridmd}, 1fr)`};
  }
  
  @media (min-width: 900px) {
    grid-template-columns: ${(props) =>
      props.gridlg &&`repeat(${props.gridlg}, 1fr)`};
  }
`