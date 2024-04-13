import { ReactNode } from "react"
import { Text } from "./styles"

export interface ILink {
  content?: ReactNode
  color?: string
  colorhover?: string
  fsize?: string
  lheight?: string
  fweight?: string
  to: string
}


const Link = ({
  content, color, colorhover, fsize, lheight, fweight, to
}: ILink) => {
  return (
    <Text
      colorhover={colorhover}
      to={to}
      color={color}
      fsize={fsize}
      lheight={lheight}
      fweight={fweight}
    >
      {content}
    </Text>
  )
}

export default Link