import styled from "styled-components";
import { IAccordionProps } from ".";

export const AccoridionContainer = styled.div<IAccordionProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.bordercolor ? props.bordercolor : "#575757"};
  margin-top: 20px;
`

export const AccordionHeader = styled.div<IAccordionProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => props.bgheadercolor ? props.bgheadercolor : "#dadada"};
  
  p {
    color: ${(props) => props.titlecolor && props.titlecolor};
    font-weight: bold;
    font-size: 22px;
  } 
`

export const AccordionContent = styled.div<IAccordionProps>`
@keyframes go-back {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


  animation: go-back 1s;
  padding: 4px 12px 12px;
  border-top: 1px solid ${(props) => props.bordercolor ? props.bordercolor : "#575757"};
  background-color: ${(props) => props.bgcontentcolor && props.bgcontentcolor}; 
`