import styled from 'styled-components'
import { Props } from '.'

export const FooterContainer = styled.footer<Props>`
  diplay: flex;
  flex-direciton: column;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  color: ${(props) => (props.textcolor ? props.textcolor : '#fff')};
`
