import styled from 'styled-components'
import { HeadingProps } from './index'

const Heading = styled.div<HeadingProps>`
  color: ${(props) =>
    props.headingcolor != undefined ? props.headingcolor : '#fff'};
  position: relative;
  z-index: 1;
  font-size: 1em;
  text-align: ${(props) =>
    props.headingalign != undefined ? props.headingalign : 'start'};
`

export const H1 = styled(Heading).attrs({ as: 'h1' })`
  font-size: 3em;
  line-height: 1em;
  text-transform: uppercase;
`
export const H2 = styled(Heading).attrs({ as: 'h2' })`
  font-size: 1.3em;
`
export const H3 = styled(Heading).attrs({ as: 'h3' })`
  font-size: 1.2em;
`

export const SectionTitle = styled(H2)<HeadingProps>`
  background-color: ${(props) =>
    props.headingbgcolor ? props.headingbgcolor : 'transparent'};
  padding: 16px;
  font-weight: bold;
  font-size: 1.5em;
`
