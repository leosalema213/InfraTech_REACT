import { ReactNode } from 'react'
import * as S from './styles'
import { Label } from "../InputGroup/styles"

export interface ISelectProps {
  children: ReactNode
  border?: string
  label?: string
  textlabelcolor?: string
}

export const Select = ({ children, border, label, textlabelcolor }: ISelectProps) => {
  return (
    <Label textlabelcolor={textlabelcolor}>
      {label}
      <S.Select border={border}>
        {children}
      </S.Select>
    </Label>
  )
}

export default Select