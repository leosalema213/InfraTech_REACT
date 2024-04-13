import { IconType } from 'react-icons'
import * as S from "./styles"

export interface ISocial {
  url: string,
  icon: IconType,
}


export type Props = {
  direction?: "col" | "row";
  socialList: ISocial[];
}

const SocialBar = ({socialList}: Props) => {


  return (
    <S.Ul>
      {
        socialList.map(({url, icon: SocialIcon}) => (
          <S.Li key={url}>
            <a href={url}>
              <SocialIcon color='#00a2ff' size="28"/>
            </a>
          </S.Li>
        ))
      }

    </S.Ul>

  )
}


export default SocialBar;