import { ReactNode } from 'react'
import * as S from './styles'
import { Label } from "../InputGroup/styles"

export type Props = {
  children: ReactNode
  border?: string
  label?: string
  textlabelcolor?: string
}

export const Select = ({ children, border, label, textlabelcolor }: Props) => {
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