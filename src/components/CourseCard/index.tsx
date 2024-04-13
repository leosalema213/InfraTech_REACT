import { ReactNode } from "react"
import Button from "../Button"
import Heading from "../Headings"
import * as S from "./styles"

export interface ICourseProps {
  coursename?: string
  imageurl?: string
  description?: string
  buttonlink?: string
  orientation?: "default " | "reverse"
  content?: ReactNode
  to?: string;
}

const CourseCard = ({
  coursename, imageurl, description, orientation, content, to
}: ICourseProps) => {
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
          <Button
            bgcolor="#0779bb"
            bgcolorhover="#00a2ff"
            textcolor="#fff"
            rounded="10px"
            to={to}
            content={content}
          />
        </div>
      </S.CardContainer>
    </S.Card>
  )
}

export default CourseCard