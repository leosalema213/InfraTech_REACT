import styled from "styled-components"
import { IParagraphProps } from "."

export const Text = styled.p<IParagraphProps>`
  margin-top: 6px;
  font-size: ${(props) => props.fsize && props.fsize};
  color: ${(props) => props.color && props.color};
  line-height: ${(props => props.lheight && props.lheight)};
  font-weight: ${(props) => props.fweight && props.fweight};
  z-index: 1;
`