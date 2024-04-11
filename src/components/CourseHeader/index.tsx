import { Header } from './styles'
import { IHeaderProps } from '../Header'

const CourseHeader = ({
  children, after, align, background, gap, justify
}: IHeaderProps) => {
  return <Header
    background={background}
    after={after}
    align={align}
    justify={justify}
    gap={gap}>

    {children}

  </Header>
}

export default CourseHeader