import { ReactNode } from "react"

import * as S from "./styles"

export type Props = {
  children?: ReactNode
}

const Form = ({children}: Props) => {
  return(
    <S.Formulario >
      {children}
    </S.Formulario>
  )
}

export default Form