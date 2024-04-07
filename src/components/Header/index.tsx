import { Parallax } from "react-parallax";
import * as S from "./styles"
import { ReactNode } from "react";

export type Props = {
  justify?: "center" | "end";
  align?: "center" | "end";
  background?: string;
  children: ReactNode;
  after?: "1" | "2" | "3";
}

const Header = ({ background, children, after, align, justify }: Props) => {
  return (
    <Parallax bgImage={background} strength={500}>
      <S.HeaderContainer background={background} after={after} align={align} justify={justify}>
        {children}
      </S.HeaderContainer>
    </Parallax>
  )



}

export default Header