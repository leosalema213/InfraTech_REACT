import Heading from '../../Headings'
import * as S from './styles'

export interface ITeacherProps {
  imageurl?: string
  name?: string
  profession?: string
  description?: string
  margin?: string
}


const TeacherCard = ({ imageurl, name, profession, description, margin }: ITeacherProps) => {
  return (
    <S.CardContainer margin={margin}>
      <img src={imageurl} className='rounded' alt="" />
      <Heading level={2} color='#000' align='center'>{name}</Heading>
      <Heading level={3} color='#000' align='center'>{profession}</Heading>
      <p>{description}</p>
    </S.CardContainer>
  )
}

export default TeacherCard