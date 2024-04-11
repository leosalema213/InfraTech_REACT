import styled from "styled-components";
import { HeaderContainer } from "../Header/styles";

export const Header = styled(HeaderContainer) `

@media(max-width: 600px) {
h1{
  font-size: 2.4em;
}
}

#formHeader {
  display: none;
  z-index: 1;

  @media (min-width: 900px) {
    display: block;
    width: 70%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
}

@media(min-width: 900px) {
  flex-direction: row;
  justify-content: center;
  align-items: start;
}
`