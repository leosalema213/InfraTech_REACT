import { ReactNode } from 'react'
import * as S from './styles'

export interface IButtoHeaderProps {
  content?: ReactNode
  bgcolor?: string
  bgcolorhover?: string
  bordercolor?: string
  textcolor?: string
  textcolorhover?: string
  to?: string
}

export const ButtonHeader = ({
  to, content, bgcolor, bgcolorhover, textcolor, bordercolor, textcolorhover
}: IButtoHeaderProps) => {
  return <S.Button
    to={to} bgcolor={bgcolor}
    bgcolorhover={bgcolorhover} textcolor={textcolor}
    bordercolor={bordercolor} textcolorhover={textcolorhover}
  >
    {content}
  </S.Button>

}
export default ButtonHeader