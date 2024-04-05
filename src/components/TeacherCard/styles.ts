import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
align-items: center;
justify-content: center;
margin-bottom: 20px;
padding: 12px;
box-shadow: 0px 0px 8px rgba(0,0,0,.4196078431);

img {
  width: 100%;
  height: 280px;
  margin-bottom: 8px;
}

p {
  line-height: 26px;
  margin-top: 6px;
}
`