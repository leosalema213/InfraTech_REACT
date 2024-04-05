import Btn from "../Button"
import Heading from "../Headings"
import * as S from "./styles"

export type Props = {
  coursename?: string
  imageurl?: string
  description?: string
  buttontext?: string
  buttonlink?: string
  orientation?: "default " | "reverse" 
}

const CourseCard = ({
  coursename, imageurl, description, buttontext, orientation
}: Props) => {
  return (
    <S.Card>
      <Heading
        level={2}
        headingcolor='#000'
        headingalign="center">
          {coursename}
      </Heading>
      <S.CardContainer orientation={orientation}>
        <img src={imageurl} alt="" />
        <div>
          <p> {description}</p> 
          <Btn type="button">{buttontext}</Btn>
        </div>
      </S.CardContainer>
    </S.Card>
  )
}

export default CourseCard