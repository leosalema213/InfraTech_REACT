import styled from 'styled-components'
import { Props } from '.'

export const Btn = styled.a<Props>`
  text-transform: uppercase;
  font-weight: bold;
  width: ${(props) => props.width && props.width};
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
    transform: ${(props) => props.animated == '1' && 'scale(1.05)'};
    background-color: ${(props) =>
      props.animated == "2" && props.bordercolor};
    transition: all ease .8s;
    color: #fff;
  }
`
