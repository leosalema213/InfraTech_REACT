import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  children: ReactNode;
  width?: '100';
}
export const BtnHome = ({children}: Props) => {
  return <S.BtnHome> {children} </S.BtnHome>
}

const Btn = ({children,width}: Props) => {
 return <S.Btn width={width}> {children} </S.Btn>
}

export default Btn