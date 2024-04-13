import * as S from "./styles"

export interface IInput {
  label?: string
  inputname?: string
  inputtype?: "text" | "tel" | "email" | "number"
  border?: string
  textlabelcolor?: string
  required?: true
}

const InputGroup = ({ 
  inputname, inputtype, label, border, required, textlabelcolor 
}: IInput) => {

  return (
    <S.Group>
      <S.Label textlabelcolor={textlabelcolor}>{label}
        <S.Input required={required}
          type={inputtype} name={inputname}
          id={inputname} border={border}
        />
      </S.Label>
    </S.Group>
  )
}

export default InputGroup