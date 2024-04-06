import { ReactNode } from "react"
import * as S from "./styles"

export type Props = {
  display?: "grid"
  gridrepeat?: "1" | "2" | "3" | "4"
  children?: ReactNode
}

const Container = ({ children, display, gridrepeat }: Props) => {

  if (display == "grid") {
    return (
      <S.ContainerGrid gridrepeat={gridrepeat} display={display}>
        {children}
      </S.ContainerGrid>
    )
  }

  return (
    <S.ContainerFlex>
      {children}
    </S.ContainerFlex>
  )

}

export default Container