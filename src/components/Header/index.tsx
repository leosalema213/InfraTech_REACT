import * as S from "./styles"
import { ReactNode } from "react";

export type props = {
  background: ReactNode;
  children: ReactNode;
}

const Header = ({ background, children }: props) => {
  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      {children}
    </S.HeaderContainer>
  )



}

export default Header