import styled from 'styled-components'
import { Props } from './index'

const Heading = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  font-size: 1em;
  text-align: center;
`

export const H1 = styled(Heading).attrs({ as: 'h1' })`
  font-size: 3em;
  line-height: 1em;
  text-transform: uppercase;
`
export const H2 = styled(Heading).attrs({ as: 'h2' })`
  font-size: 1.4em;
`
export const H3 = styled(Heading).attrs({ as: 'h3' })``

export const SectionTitle = styled(H2)<Props>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  padding: 14px;
`
