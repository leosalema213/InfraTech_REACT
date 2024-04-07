import { ReactNode } from "react"
import Btn from "../Button"
import Heading from "../Headings"
import * as S from "./styles"

export type Props = {
  coursename?: string
  imageurl?: string
  description?: string
  buttonlink?: string
  orientation?: "default " | "reverse" 
  content?: ReactNode
}

const CourseCard = ({
  coursename, imageurl, description, orientation, content
}: Props) => {
  return (
    <S.Card>
      <Heading
        level={2}
        color='#000'
        align="center">
          {coursename}
      </Heading>
      <S.CardContainer orientation={orientation}>
        <img src={imageurl} alt="" />
        <div>
          <p> {description}</p> 
          <Btn
            p="1"
            txtcolor="#fff"
            bgcolor="#00a2ff"
            bordercolor="#00a2ff"
            content={content}
            rounded="1"
            to="/frontend"
            />
        </div>
      </S.CardContainer>
    </S.Card>
  )
}

export default CourseCard