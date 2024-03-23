import styled from 'styled-components'


const Heading = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  font-size: 1.3em;
  text-align: center;
`

export const H1 = styled(Heading).attrs({ as: 'h1' })`
  font-size: 3em;
  line-height: 1em;
  text-transform: uppercase;
`
export const H2 = styled(Heading).attrs({ as: 'h2' })``
export const H3 = styled(Heading).attrs({ as: 'h3' })`
  font-size: 1em;
   
`
