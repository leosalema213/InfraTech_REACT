import styled from 'styled-components'
import { Props } from '.'

export const Btn = styled.a<Props>`
  text-align: ${(props) => (props.width != null ? 'center' : 'auto')};
  width: ${(props) => (props.width != null ? '100%' : 'auto')};
  display: inline-block;
  margin-top: 20px;
  font-weight: bold;
  padding: 8px 16px;
  color: #fff;
  background-color: #00a2ff;
  border: none;
  margin-top: 16px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`

export const BtnHome = styled.a`
  text-transform: uppercase;
  display: inline-block;
  color: #00a2ff;
  border: 1px solid #00a2ff;
  padding: 9px 32px;
  margin-top: 80px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #00a2ff;
    color: #fff;
    transform: translateY(-4px);
    transition: 0.4s;
  }
`
