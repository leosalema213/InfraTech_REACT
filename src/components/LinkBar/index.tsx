import { LinkContainer } from './styles'
import Link, { ILinkProps } from '../Link'

export interface ILinkBarProps {
  links: ILinkProps[]
}

const LinkBar = ({ links }: ILinkBarProps) => {

  

  return (
    <LinkContainer>
     {links.map((link) => (
      <Link
      key={crypto.randomUUID()}
      content={link.content} 
      to={link.to}
      color={link.color}
      colorhover={link.colorhover}
      fsize={link.fsize}
      fweight={link.fweight}
      lheight={link.lheight}
      />
     ))}
    </LinkContainer >
  )
}

export default LinkBar