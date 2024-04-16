import styled from 'styled-components'
import { ISectionProps } from '.'

export const Section = styled.section<ISectionProps>`
  background: ${(props) => props.bgcolor && props.bgcolor} ;
  margin: ${(props) => props.margin && props.margin};
  margin-bottom: 120px;
  padding: ${(props) => (props.padding ? props.padding : '0 5.6vw')};
`
