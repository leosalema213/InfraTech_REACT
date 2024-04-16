import styled from 'styled-components'
import { IMaskInput } from "react-imask"

import { IInput } from '.'


export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled(IMaskInput)<IInput>`
  width: 100%;
  padding: 6px 8px;
  border-radius: 12px;
  font-size: 18px;
  border: ${(props) => props.border ? props.border : "none"};
  margin-top: 8px;
  outline: none;
`
export const Label = styled.label<IInput>`
  font-size: 18px;
  color: ${(props) => props.textlabelcolor ? props.textlabelcolor : "#000"};
`
