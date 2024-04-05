import { ReactNode } from "react"
import * as S from "./styles"

export type Props = {
  display?: "flex" | "grid"
  gridrepeat?: "1" | "2" | "3" | "4"
  children: ReactNode
}

const Container = ({ children, display, gridrepeat }: Props) => {
  switch(display) {
    case 'flex':
      return (
        <S.ContainerFlex  display={display}>
            {children}
        </S.ContainerFlex>
      )
    case 'grid':
      return (
        <S.ContainerGrid gridrepeat={gridrepeat} display={display}>
            {children}
        </S.ContainerGrid>
      )
    default:
      return (
        <S.Container display={display}>
            {children}
        </S.Container>
      )
  }
}

export default Container