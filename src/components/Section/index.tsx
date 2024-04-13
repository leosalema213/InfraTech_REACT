import { ReactNode } from "react";
import * as S from "./styles"

export interface ISectionProps {
  children: ReactNode
  bgcolor?: string
  margin?: string
  padding?: string
  id?: string
}

const Section = ({ children, bgcolor, margin, padding,id }: ISectionProps) => {
  return (
    <S.Section id={id} bgcolor={bgcolor} margin={margin} padding={padding}>
        {children}
    </S.Section>
  )
}
export default Section;