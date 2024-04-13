import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IButton} from '.'

export const Btn = styled(Link)<IButton>`
  display: inline-block;
  color: ${(props) => props.textcolor ? props.textcolor : "#000"};
  width:${(props) => props.size && props.size};
  background-color: ${(props) => props.bgcolor && props.bgcolor};
  border-radius: ${(props) => props.rounded && props.rounded};
  padding: 8px 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;

  &:hover {
    transform: translateY(-1px);
    background-color: ${(props) => props.bgcolorhover && props.bgcolorhover};
    transition: all ease .4s;
  }
`

export const BtnSubmit = styled(Btn).attrs({as: "button"})<IButton>`
  border: none;
  font-size: 18px;
`

