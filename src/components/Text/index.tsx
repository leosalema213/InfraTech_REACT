import { ReactNode } from "react"
import { Text as _Text } from "./styles"

export interface IParagraphProps {
  children: ReactNode
  color?: string
  fsize?: string
  lheight?: string
  fweight?: string
}
const Text = ({ children, color, fsize, lheight, fweight }: IParagraphProps) => {
  return (
    <_Text color={color} fsize={fsize} lheight={lheight} fweight={fweight}>
      {children}
    </_Text>
  )
}

export default Text