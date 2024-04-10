import styled from "styled-components"
import { Props } from "."

export const Text = styled.p<Props>`
  margin-top: 6px;
  font-size: ${(props) => props.fsize && props.fsize};
  color: ${(props) => props.color && props.color};
  line-height: ${(props => props.lheight && props.lheight)};
  z-index: 1;
`