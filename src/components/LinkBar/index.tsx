import { LinkContainer } from './styles'
import Link, { ILink } from '../Link'

export interface ILinkBar {
  links: ILink[]
}

const LinkBar = ({ links }: ILinkBar) => {

  

  return (
    <LinkContainer>
     {links.map((link) => (
      <Link
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