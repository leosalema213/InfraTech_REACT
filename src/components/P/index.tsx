import { ReactNode } from "react"

export type Props = {
  children: ReactNode
  color?: string
  fsize?: string
}
const P = ({children, color, fsize }: Props) => {
  return<p style={{color: `${color}`, fontSize: `${fsize}`, zIndex: "1", marginTop: "4px"}}>
    {children}
  </p>
}

export default P