import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  children?: ReactNode;
  width?: '100';
  type?: "button" | "submit";
  bgcolor?: string;
  bordercolor?: string;
  txtcolor?: string;
  p?: "1" | "2";
  rounded?: "1" | "2"
  content?: string;
  animated?: "1" | "2" 
}

export const Btn = ({
  children, content, p, txtcolor, bgcolor, bordercolor, rounded, animated
}: Props) => {
  return <S.Btn
    p={p} txtcolor={txtcolor} bgcolor={bgcolor} 
    bordercolor={bordercolor} rounded={rounded} animated={animated}
  >
    {children || content}
  </S.Btn>

}
export default Btn