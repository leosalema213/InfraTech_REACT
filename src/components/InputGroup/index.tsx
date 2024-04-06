import * as S from "./styles"

export type Props = {
  label?: string
  inputname?: string
  inputtype?: "text" | "tel" | "email" | "number"
  color?: string
  required?: true
}

const InputGroup = ({ inputname, inputtype, label, color, required }: Props) => {

  return (
    <S.Group>
      <S.Label>{label}
        <S.Input required={required}  type={inputtype} name={inputname} id={inputname} color={color} />
      </S.Label>
    </S.Group>
  )
}

export default InputGroup