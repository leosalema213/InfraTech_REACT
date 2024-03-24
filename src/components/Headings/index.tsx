import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  level?: 1 | 2 | 3
  children?: ReactNode
  content?: ReactNode
  bgColor?: string
}

const Heading = ({ level, children, content }: Props) => {
  const headingTags = {
    1: S.H1,
    2: S.H2,
    3: S.H3
  }
  const HeadingTag = headingTags[level!]

  return <HeadingTag>{children || content}</HeadingTag>
}

export const HeadingSection = ({ children, content, bgColor }: Props) => {
  return (
    <S.SectionTitle bgColor={bgColor} >
      {children || content}
    </S.SectionTitle>
  )
}

export default Heading

