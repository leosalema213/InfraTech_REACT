import styled from 'styled-components'
import { Props } from '.'

export const Btn = styled.a<Props>`
  display: inline-block;
  width: ${(props) => (props.width != null ? '100%' : 'auto')};
  padding: 8px 16px;
  margin-top: 16px;
  cursor: pointer;
  text-align: ${(props) => (props.width != null ? 'center' : 'auto')};
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background-color: #00a2ff;
  border: none;
  border-radius: 12px;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`

export const BtnHome = styled.a`
  display: inline-block;
  padding: 9px 32px;
  border: 1px solid #00a2ff;
  margin-top: 80px;
  cursor: pointer;
  text-transform: uppercase;
  color: #00a2ff;
  z-index: 1;

  &:hover {
    background-color: #00a2ff;
    color: #fff;
    transform: translateY(-4px);
    transition: 0.4s;
  }
`
