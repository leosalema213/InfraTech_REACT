import styled from 'styled-components'
import { Props } from '.'

export const FooterContainer = styled.footer<Props>`
  display: flex;
  background: ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  color: ${(props) => (props.textcolor ? props.textcolor : '#fff')};
  flex-direciton: column;
  justify-content: center;
  align-items: center;
  padding: 40px 5.6vw;
`
