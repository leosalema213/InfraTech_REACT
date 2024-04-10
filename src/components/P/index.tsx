import { ReactNode } from "react"
import { Text } from "./styles"

export type Props = {
  children: ReactNode
  color?: string
  fsize?: string
  lheight?: string
}
const P = ({ children, color, fsize, lheight }: Props) => {
  return (
    <Text color={color} fsize={fsize} lheight={lheight}>
      {children}
    </Text>
  )
}

export default P