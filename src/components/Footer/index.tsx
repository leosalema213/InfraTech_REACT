import { ReactNode } from 'react'
import { FooterContainer } from './styles'

export interface IFooterProps {
  bgcolor?: string
  textcolor?: string
  children: ReactNode
}

const Footer = ({bgcolor, textcolor, children}: IFooterProps) => {
  return (
    <FooterContainer bgcolor={bgcolor} textcolor={textcolor}>
      <div>
        {children}
      </div>
    </FooterContainer>
  )
}

export default Footer