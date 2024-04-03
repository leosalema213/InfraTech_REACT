import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  children: ReactNode;
  width?: '100';
  type: "button" | "submit";
}
export const BtnHome = ({children}: Props) => {
  return <S.BtnHome> {children} </S.BtnHome>
}

const Btn = ({children,width, type}: Props) => {
 return <S.Btn type={type} width={width}> {children} </S.Btn>
}

export default Btn