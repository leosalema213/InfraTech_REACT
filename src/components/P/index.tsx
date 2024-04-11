import { ReactNode } from "react"
import { Text } from "./styles"

export type Props = {
  children: ReactNode
  color?: string
  fsize?: string
  lheight?: string
  fweight?: string
}
const P = ({ children, color, fsize, lheight, fweight }: Props) => {
  return (
    <Text color={color} fsize={fsize} lheight={lheight} fweight={fweight}>
      {children}
    </Text>
  )
}

export default P