import { ReactNode } from "react";
import * as S from "./styles"

export type Props = {
  children: ReactNode
  bgcolor?: string
  margin?: string;
  padding?: string;
}

const Section = ({ children, bgcolor, margin, padding }: Props) => {
  return (
    <S.Section bgcolor={bgcolor} margin={margin} padding={padding}>
        {children}
    </S.Section>
  )
}
export default Section;