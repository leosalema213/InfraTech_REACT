import * as S from "./styles"
import { ReactNode } from "react";

export interface ICourseHeaderProps {
  children: ReactNode;
  background?: string
}

const CourseHeader = ({ background, children}: ICourseHeaderProps) => {
  return (
    <S.HeaderContainer background={background}>
      {children}
    </S.HeaderContainer>
  )
}

export default CourseHeader