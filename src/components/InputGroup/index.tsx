import * as S from "./styles"

export type Props = {
  label?: string
  inputname?: string
  inputtype?: "text" | "tel" | "email"
  color?: string
}

const InputGroup = ({ inputname, inputtype, label, color }: Props) => {

  return (
    <S.Group>
      <S.Label>{label}
        <S.Input type={inputtype} name={inputname} id={inputname} color={color} />
      </S.Label>
    </S.Group>
  )
}

export default InputGroup