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
  animated?: boolean;
}

export const Btn = ({
  content, p, txtcolor, bgcolor, bordercolor, rounded, animated, width,type
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

  return <S.Btn
    p={p} txtcolor={txtcolor} bgcolor={bgcolor} width={width}
    bordercolor={bordercolor} rounded={rounded} animated={animated}
  >
    {content}
  </S.Btn>

}
export default Btn