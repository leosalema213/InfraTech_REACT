import { ReactNode, useState } from 'react'
import * as S from './styles'
import P from '../Text'
import { IoMdClose } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

export interface IAccordionProps {
  title?: string
  content?: ReactNode
  bgcolor?: string
  titlecolor?: string
  textcolor?: string
  bordercolor?: string
  bgheadercolor?: string
  bgcontentcolor?: string
}

const Accordion = ({
  content, title, textcolor, titlecolor, bgheadercolor,
  bgcontentcolor, bordercolor
}: IAccordionProps) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <S.AccoridionContainer bordercolor={bordercolor} >
      <S.AccordionHeader bgheadercolor={bgheadercolor} onClick={() => setIsActive(!isActive)} titlecolor={titlecolor} >
        <p>{title}</p>

        {isActive == true
          ? (<IoMdClose
            size="24px"
            className='icons iconClose'
            color={titlecolor} />)
          : (
            <BiSolidDownArrow
              size="20px"
              className='iconOpen'
              color={titlecolor} />
          )}

      </S.AccordionHeader>

      {isActive && (
        <S.AccordionContent className='icons accordionContent' bgcontentcolor={bgcontentcolor}>
          <P color={textcolor} lheight='22px'>
            {content}
          </P>
        </S.AccordionContent>
      )}

    </S.AccoridionContainer>
  )
}

export default Accordion