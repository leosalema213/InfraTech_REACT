import styled from 'styled-components'
import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4196078431);
  margin-bottom: 40px;

  h2 {
    padding-bottom: 6px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 600px) {
    h2 {
      text-align: start;
    }
  }
`

export const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: ${(props) =>
      props.orientation == 'reverse' ? 'row-reverse' : 'row'};
    align-items: start;
  }

  img {
    width: 100%;
    height: 280px;
    margin-bottom: 8px;

    @media (min-width: 600px) {
      width: 50%;
    }
  }

  p {
    line-height: 26px;
    margin-top: 6px;
  }
`
