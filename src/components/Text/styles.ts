import styled from 'styled-components'
import { Props } from '.'

function returnType(type: string) {
  switch (type) {
    case 'md':
      return '2em'
    case 'lg':
      return '2.5em'
    default:
      return '1.5em'
  }
}

export const P = styled.p<Props>`
  font-size: ${(props) => returnType(props.type)};
  color: white;
  z-index: 1;
`
