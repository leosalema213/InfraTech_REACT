import styled from "styled-components";
import {ITeacherProps} from '.'

export const CardContainer = styled.div<ITeacherProps>`
display: flex;
flex-direction: column;
gap: 4px;
align-items: center;
justify-content: center;
margin: ${(props) => props.margin && props.margin};
padding: 12px;
box-shadow: 0px 0px 8px rgba(0,0,0,.4196078431);

@media (max-width: 900px) {
  h2 {
    font-size: 20px;1
  }
  h3 {
    font-size: 18px;
  }
}

img {
  margin-bottom: 8px;
  width: 100%;
  max-height: 140px;
  max-width: 140px;
  border-radius: 50%;
}

p {
  line-height: 26px;
  margin-top: 6px;
}
`