import styled from 'styled-components'
import { Props } from '.'

export const Section = styled.section<Props>`
  background: ${(props) => props.bgcolor && props.bgcolor} ;
  margin: ${(props) => props.margin && props.margin};
  margin-bottom: 120px;
  padding: ${(props) => props.padding ? props.padding : "0 5.6vw"};
`
