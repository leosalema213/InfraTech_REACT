import { ReactNode, useState } from 'react'
import * as S from './styles'
import P from '../P'
import { IoMdClose } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

export type Props = {
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
}: Props) => {

  const [isActive, setIsActive] = useState(false);

  const openAcordion = () => {
    if (isActive == true) {
      setIsActive(false)
      return
    }
    setIsActive(true)
  }

  return (
    <S.AccoridionContainer bordercolor={bordercolor} >
      <S.AccordionHeader bgheadercolor={bgheadercolor} onClick={openAcordion} >
        <p>{title}</p>
        <BiSolidDownArrow
          size="20px"
          className='iconOpen'
          color={titlecolor} />

        <IoMdClose size="24px" className='icons iconClose' color={titlecolor} />
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