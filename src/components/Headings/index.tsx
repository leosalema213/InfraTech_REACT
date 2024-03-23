import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  level: 1 | 2 | 3
  children?: ReactNode
  content?: ReactNode
}

const Heading = ({ level, children, content }: Props) => {
  const headingTags = {
    1: S.H1,
    2: S.H2,
    3: S.H3
  }
  const HeadingTag = headingTags[level]

  return <HeadingTag>{children || content}</HeadingTag>
}

export default Heading
