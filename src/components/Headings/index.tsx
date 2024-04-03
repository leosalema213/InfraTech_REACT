import { ReactNode } from 'react'
import * as S from './styles'

export type HeadingProps = {
  level?: 1 | 2 | 3
  children?: ReactNode
  content?: ReactNode
  headingcolor?: string
  headingbgcolor?: string
  headingalign?: "center" | "end"
  bordercolor?: string
}

const Heading = ({
  level, children, content,
  headingalign, headingcolor, bordercolor
}: HeadingProps) => {
  const headingTags = {
    1: S.H1,
    2: S.H2,
    3: S.H3
  }
  const HeadingTag = headingTags[level!]

  return (
    <HeadingTag
      bordercolor={bordercolor}
      headingcolor={headingcolor}
      headingalign={headingalign}>
        {children || content}
    </HeadingTag>
  )
}

export const HeadingSection = ({ 
  children, content, headingbgcolor,
  headingalign, headingcolor, bordercolor
}: HeadingProps) => {
  return (
    <S.SectionTitle 
    bordercolor={bordercolor} 
    headingcolor={headingcolor} 
    headingalign={headingalign} 
    headingbgcolor={headingbgcolor}>
      {children || content}
    </S.SectionTitle>
  )
}

export default Heading

