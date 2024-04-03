import { ReactNode } from 'react'
import * as S from './styles'
import { Label } from "../InputGroup/styles"

export type Props = {
  children: ReactNode
  color?: string
  label?: string
}

export const Select = ({ children, color, label }: Props) => {
  return (
    <Label>{label}
      <S.Select color={color}>
        {children}
      </S.Select>
    </Label>
  )
}

export default Select