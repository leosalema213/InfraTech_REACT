import styled from "styled-components";
import { Props } from ".";

export const Select = styled.select<Props>`
  width: 100%;
  padding: 6px 8px;
  border-radius: 12px;
  font-size: 18px;
  border: 1px solid ${(props => props.color != undefined ? props.color : "#000")};
  outline: 1px solid rgba(0, 0, 0, 0);

  option::selection {
    background-color: red;
  }
`