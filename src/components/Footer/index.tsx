import { ReactNode } from 'react'
import { FooterContainer } from './styles'

export type Props = {
  bgcolor?: string
  textcolor?: string
  children: ReactNode
}

const Footer = ({bgcolor, textcolor, children}: Props) => {
  return (
    <FooterContainer bgcolor={bgcolor} textcolor={textcolor}>
      <div>
        {children}
      </div>
    </FooterContainer>
  )
}

export default Footer