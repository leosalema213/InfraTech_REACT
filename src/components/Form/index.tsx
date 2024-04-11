import { ReactNode } from "react"

import * as S from "./styles"

export type Props = {
  children?: ReactNode
  bgcolor?: string
  rounded?: string
}

const Form = ({children, bgcolor, rounded}: Props) => {
  return(
    <S.Formulario  bgcolor={bgcolor} rounded={rounded}>
      {children}
    </S.Formulario>
  )
}

export default Form