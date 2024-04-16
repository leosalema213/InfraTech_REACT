import { ReactNode } from 'react'
import { CardContainer } from './styles'

export interface ICardProps {
  children: ReactNode
  bgcolor?: string
  boxshadow?: string
  padding?: string
  margin?: string
}

const Card = ({ children, bgcolor, boxshadow, padding, margin }: ICardProps) => {
  return (
    <CardContainer bgcolor={bgcolor} boxshadow={boxshadow} padding={padding} margin={margin}>
      {children}
    </CardContainer>
  )
}

export default Card