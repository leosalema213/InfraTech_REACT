import styled from 'styled-components'
import { IButtoHeaderProps } from '.'
import { HashLink } from 'react-router-hash-link'

export const Button = styled(HashLink)<IButtoHeaderProps>`
  display: inline-block;
  padding: 8px 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  text-decoration: none;
  border: 1px solid ${(props) => props.bordercolor};
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: ${(props) => props.bgcolorhover};
    color: ${(props) => props.textcolorhover};
    transition: all ease .6s;
  }
`
