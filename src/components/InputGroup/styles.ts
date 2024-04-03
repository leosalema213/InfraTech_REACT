import styled from 'styled-components'
import { Props } from '.'


export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px
`

export const Input = styled.input<Props>`
  width: 100%;
  padding: 6px 8px;
  border-radius: 12px;
  font-size: 18px;
  border: 1px solid ${(props) => props.color != undefined ? props.color : "#000"};
  margin-top: 8px;
`
export const Label = styled.label`
  font-size: 18px;
`
