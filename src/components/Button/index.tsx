import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  width?: string;
  type?: "button" | "submit";
  bgcolor?: string;
  bordercolor?: string;
  txtcolor?: string;
  p?: "1" | "2";
  rounded?: "1" | "2"
  content?: ReactNode;
  animated?: "1";
  to?: string;
}

export const Btn = ({
  content, p, txtcolor, bgcolor, bordercolor, rounded, animated, width,type,to
}: Props) => {

  if(type) {
    return <S.BtnSubmit
    p={p} txtcolor={txtcolor} bgcolor={bgcolor} width={width}
    bordercolor={bordercolor} rounded={rounded} animated={animated}
    type={type}
  >
    {content}
  </S.BtnSubmit>
  } 

  return <S.Btn to={to}
    p={p} txtcolor={txtcolor} bgcolor={bgcolor} width={width}
    bordercolor={bordercolor} rounded={rounded} animated={animated}
  >
    {content}
  </S.Btn>

}
export default Btn