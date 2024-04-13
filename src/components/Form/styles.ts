import styled from 'styled-components'
import { IFormProps } from '.'

export const Formulario = styled.form<IFormProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-radius: ${(props) => props.rounded && props.rounded};
  background-color: ${(props) => props.bgcolor && props.bgcolor};
`
