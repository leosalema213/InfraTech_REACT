import { Parallax } from "react-parallax";
import * as S from "./styles"
import { ReactNode } from "react";

export interface IHeaderProps {
  justify?: "center" | "end";
  align?: "center" | "end";
  background?: string;
  children: ReactNode;
  gap?: string
  after?: "1" | "2" | "3";
}

const Header = ({
  background, children, after, align, justify, gap
}: IHeaderProps) => {
  return (
    <Parallax bgImage={background} strength={500}>
      <S.HeaderContainer
        background={background}
        after={after}
        align={align}
        justify={justify}
        gap={gap}>
        {children}
      </S.HeaderContainer>
    </Parallax>
  )



}

export default Header