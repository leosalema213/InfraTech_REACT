import { ReactNode } from 'react'
import * as S from './styles'

export interface IButton {
  size?: string
  to?: string
  content?: ReactNode
  rounded?: string
  textcolor?: string;
  bgcolor?: string
  bgcolorhover?: string
  type?: 'button' | 'submit'
}

export const Button = ({
  size, content, bgcolor, bgcolorhover, type, textcolor, rounded,to
}: IButton) => {
  
  if(type == "submit") {
    return <S.BtnSubmit
    type="submit"
    size={size}
    bgcolor={bgcolor}
    bgcolorhover={bgcolorhover}
    textcolor={textcolor} 
    rounded={rounded}>
    {content}
  </S.BtnSubmit>

  }
  return <S.Btn
    type="button"
    to={to}
    size={size}
    bgcolor={bgcolor}
    bgcolorhover={bgcolorhover}
    textcolor={textcolor} 
    rounded={rounded}>
    {content}
  </S.Btn>

}
export default Button