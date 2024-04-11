import styled from "styled-components";
import { Props } from ".";

export const Select = styled.select<Props>`
  width: 100%;
  padding: 6px 8px;
  border-radius: 12px;
  margin-top: 8px;
  font-size: 18px;
  color: ${(props) => props.textlabelcolor && props.textlabelcolor};
  border:${(props => props.border && props.border)};
  outline: 1px solid rgba(0, 0, 0, 0);
`