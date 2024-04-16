import { ReactNode } from 'react'
import * as S from './styles'
import { Label } from "../InputGroup/styles"

export interface ISelectProps {
  children: ReactNode
  border?: string
  label?: string
  textlabelcolor?: string
  selectname?: string
}

export const Select = ({ children, border, label, textlabelcolor, selectname }: ISelectProps) => {
  return (
    <Label textlabelcolor={textlabelcolor}>
      {label}
      <S.Select name={selectname} required border={border}>
        {children}
      </S.Select>
    </Label>
  )
}

export default Select