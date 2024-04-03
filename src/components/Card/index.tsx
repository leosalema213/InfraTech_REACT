import { ReactNode } from "react"
import * as S from "./styles"

export type Props = {
  boxshadow?: "default"
  children: ReactNode
}

const Card = ({boxshadow, children}:Props) => {
  return (
    <S.Card boxshadow={boxshadow}>
      {children}
    </S.Card>
  )
}

export default Card