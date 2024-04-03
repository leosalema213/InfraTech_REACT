import styled from 'styled-components'
import { Props } from '.'

export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px;
  box-shadow: 0px 0px 8px
    ${(props) =>
      props.boxshadow == 'default' ? 'rgba(0,0,0,.4196078431)' : 'transparent'};

  img {
    width: 100%;
    height: 260px;
    margin-bottom: 8px;
  }

  p {
    line-height: 30px;
    margin-top: 6px;
  }
`
