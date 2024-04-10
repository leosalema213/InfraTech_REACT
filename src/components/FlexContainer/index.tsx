import { ReactNode } from "react"
import { Flex } from "./styles"

export type Props = {
  flexsm?: "column" | "column-reverse" | "row" | "row-reverse"
  flexmd?: "column" | "column-reverse" | "row" | "row-reverse"
  flexlg?: "column" | "column-reverse" | "row" | "row-reverse"
  gap?: string
  children?: ReactNode
}

const FlexContainer = ({ children, gap, flexsm, flexmd, flexlg }: Props) => {

  return (
    <Flex gap={gap} flexsm={flexsm} flexmd={flexmd} flexlg={flexlg}>
      {children}
    </Flex>
  )

}

export default FlexContainer