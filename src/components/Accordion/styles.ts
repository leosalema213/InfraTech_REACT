import styled from "styled-components";
import { Props } from ".";

export const AccoridionContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.bordercolor ? props.bordercolor : "#575757"};
  margin-top: 20px;
`

export const AccordionHeader = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => props.bgheadercolor ? props.bgheadercolor : "#dadada"};
  
  p {
    color: ${(props) => props.title && props.title};
    font-weight: bold;
    font-size: 22px;
  }

  .iconOpen{

  }
  .iconClose {
    display: none;
  }

 
`

export const AccordionContent = styled.div<Props>`
  padding: 4px 12px 12px;
  border-top: 1px solid ${(props) => props.bordercolor ? props.bordercolor : "#575757"};
  background-color: ${(props) => props.bgcontentcolor && props.bgcontentcolor}; 
`