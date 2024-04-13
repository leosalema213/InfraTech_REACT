import { ReactNode } from "react"

import * as S from "./styles"

export interface IFormProps {
  children?: ReactNode
  bgcolor?: string
  rounded?: string
}

const Form = ({children, bgcolor, rounded}: IFormProps) => {
  return(
    <S.Formulario  bgcolor={bgcolor} rounded={rounded}>
      {children}
    </S.Formulario>
  )
}

export default Form