import { ReactNode } from 'react'
import { CardContainer } from './styles'

export type Props = {
  children: ReactNode
  bgcolor?: string
  boxshadow?: string
  padding?: string
  margin?: string
}

const Card = ({ children, bgcolor, boxshadow, padding, margin }: Props) => {
  return (
    <CardContainer bgcolor={bgcolor} boxshadow={boxshadow} padding={padding} margin={margin}>
      {children}
    </CardContainer>
  )
}

export default Card