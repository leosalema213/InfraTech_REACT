import styled from 'styled-components'
import { Props } from '.'

const Heading = styled.div<Props>`
  color: ${(props) =>
    props.color ? props.color : '#fff'};
  position: relative;
  z-index: 1;
  font-size: 1em;
  text-align: ${(props) =>
    props.align && props.align};
`

export const H1 = styled(Heading).attrs({ as: 'h1' })`
  font-size: ${(props) => props.fsize ? props.fsize : "3em"};
  line-height: 1em;
  text-transform: uppercase;
`
export const H2 = styled(Heading).attrs({ as: 'h2' })`
font-size: ${(props) => props.fsize ? props.fsize : "1.3em"};
`
export const H3 = styled(Heading).attrs({ as: 'h3' })`
font-size: ${(props) => props.fsize ? props.fsize : "1.2em"};
`

export const SectionTitle = styled(H2)<Props>`
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : 'transparent'};
  padding: 16px;
  font-weight: bold;
  
  font-size: ${(props) => props.fsize ? props.fsize : "1.5em"};
`
