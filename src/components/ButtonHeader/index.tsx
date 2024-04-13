import { ReactNode } from 'react'
import * as S from './styles'

export interface IButtoHeaderProps {
  content?: ReactNode
  bgcolor?: string
  bgcolorhover?: string
  bordercolor?: string
  textcolor?: string
  textcolorhover?: string
}

export const ButtonHeader = ({
  content, bgcolor, bgcolorhover, textcolor, bordercolor, textcolorhover
}: IButtoHeaderProps) => {
  return <S.Button
    bgcolor={bgcolor} bgcolorhover={bgcolorhover}
    textcolor={textcolor} bordercolor={bordercolor} textcolorhover={textcolorhover}
  >
    {content}
  </S.Button>

}
export default ButtonHeader