import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  content?: ReactNode
  bgcolor?: string
  bgcolorhover?: string
  bordercolor?: string
  textcolor?: string
  textcolorhover?: string
}

export const ButtonHome = ({
  content, bgcolor, bgcolorhover, textcolor, bordercolor, textcolorhover
}: Props) => {
  return <S.Button
    bgcolor={bgcolor} bgcolorhover={bgcolorhover}
    textcolor={textcolor} bordercolor={bordercolor} textcolorhover={textcolorhover}
  >
    {content}
  </S.Button>

}
export default ButtonHome