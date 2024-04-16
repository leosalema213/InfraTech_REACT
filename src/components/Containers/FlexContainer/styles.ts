import styled from 'styled-components'
import { IFlexProps } from '.'

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexsm && props.flexsm};
  gap: ${(props) => props.gap && props.gap};
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (min-width: 600px) {
    flex-direction: ${(props) => props.flexmd && props.flexmd};

    img {
      width: 50%;
    }
  }

  @media (min-width: 900px) {
    flex-direction: ${(props) => props.flexlg && props.flexlg};
`