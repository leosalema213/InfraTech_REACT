import styled from 'styled-components'
import { Props } from '.'


export const Button = styled.button<Props>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  z-index: 1;
  display: inline-block;
  padding:  8px 24px;
  color: ${(props) => props.textcolor };
  border: 1px solid ${(props) => props.bordercolor};
  background: ${(props) => props.bgcolor};

  &:hover {
    background: ${(props) => props.bgcolorhover};
    transition: all ease .2s;
    color: ${(props) => props.textcolorhover};
  }
`