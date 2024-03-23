import { ReactNode } from 'react';
import * as S from './styles'

export type Props = {
  type: 'sm' | 'md' | 'lg';
  children:  ReactNode;
}

const Text = ({type, children}: Props) => {
  return (
    <>
      <S.P type={type}>
        {children}
      </S.P>
    </>
  )

}

export default Text;