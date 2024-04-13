import styled from "styled-components"
import { ILinkProps } from "."
import { Link } from "react-router-dom"

export const Text = styled(Link)<ILinkProps>`
text-decoration: none;
  margin-top: 6px;
  font-size: ${(props) => props.fsize && props.fsize};
  color: ${(props) => props.color && props.color};
  line-height: ${(props => props.lheight && props.lheight)};
  font-weight: ${(props) => props.fweight && props.fweight};
  z-index: 1;

  &:hover {
    color: ${(props) => props.colorhover && props.colorhover};
    transition: all ease .4s;
  }
`