import Heading from '../Headings'
import * as S from './styles'

export type Props = {
  imageurl?: string
  name: string
  profession: string
  description: string;
}


const TeacherCard = ({imageurl, name, profession,description}: Props) => {
  return(
    <S.CardContainer>
       <img src={imageurl} className='rounded' alt="" />
          <Heading level={2} color='#000' align='center'>{name}</Heading>
          <Heading level={3} color='#000' align='center'>{profession}</Heading>
          <p>{description}</p>
    </S.CardContainer>
  )
}

export default TeacherCard