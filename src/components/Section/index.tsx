import { ReactNode } from "react";
import * as S from "./styles"

export type Props = {
  children: ReactNode
  bgcolor?: string
  margin?: string;
  padding?: string;
  id?: string
}

const Section = ({ children, bgcolor, margin, padding, id }: Props) => {
  return (
    <S.Section id={id} bgcolor={bgcolor} margin={margin} padding={padding}>
        {children}
    </S.Section>
  )
}
export default Section;