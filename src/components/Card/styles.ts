import styled from 'styled-components'
import { ICardProps } from '.'

export const CardContainer = styled.div<ICardProps>`
  background: ${(props) => props.bgcolor && props.bgcolor};
  box-shadow: ${(props) =>
    props.boxshadow
      ? props.boxshadow
      : '0px 0px 8px rgba(0,0,0,.4196078431);'};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
`
