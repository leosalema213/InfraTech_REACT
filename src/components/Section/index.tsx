import { ReactNode } from "react";
import * as S from "./styles"

export type Props = {
  children: ReactNode
}

const Section = ({ children }: Props) => {
  return (
    <S.Section >
      <div>
        {children}
      </div>
    </S.Section>
  )
}
export default Section;