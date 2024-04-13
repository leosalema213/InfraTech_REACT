import { ReactNode } from 'react'
import * as S from './styles'

export interface IHeading {
  level?: 1 | 2 | 3
  children?: ReactNode
  content?: string
  color?: string
  bgcolor?: string
  align?: "center" | "end"
  fsize?: string;
}

const Heading = ({
  level, children, content,
  align, color, fsize
}: IHeading) => {
  const headingTags = {
    1: S.H1,
    2: S.H2,
    3: S.H3
  }
  const HeadingTag = headingTags[level!]

  return (
    <HeadingTag
      color={color}
      align={align} fsize={fsize}>
        {children || content}
    </HeadingTag>
  )
}

export const HeadingSection = ({ 
  children, content, bgcolor,
  align, color, fsize
}: IHeading) => {
  return (
    <S.SectionTitle 
    fsize={fsize}
    color={color} 
    align={align} 
    bgcolor={bgcolor}>
      {children || content}
    </S.SectionTitle>
  )
}

export default Heading

