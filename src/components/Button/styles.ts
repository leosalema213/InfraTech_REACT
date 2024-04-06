import styled from 'styled-components'
import { Props } from '.'

export const Btn = styled.a<Props>`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  width: ${(props) => props.width && "100%"};
  padding: ${(props) => (props.p == '2' ? ' 9px 32px' : '8px 16px')};
  color: ${(props) => (props.txtcolor ? props.txtcolor : '#000')};
  border: ${(props) =>
    props.bordercolor ? `2px solid ${props.txtcolor}` : '2px solid #000'};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  border-radius: ${(props) =>
    (props.rounded == '1' && '30px') || (props.rounded == '2' && '50%')};
  cursor: pointer;
  z-index: 1;
  margin-top: 30px;
  display: inline-block;

  &:hover {
    transform: ${(props) => !props.animated && 'translateY(-3px)'};
    background-color: ${(props) =>
      props.animated && props.bordercolor};
    transition: all ease .8s;
    color: #fff;
  }
`

export const BtnSubmit = styled(Btn).attrs({ as: 'button' }) `
  font-size: 1em;
`
