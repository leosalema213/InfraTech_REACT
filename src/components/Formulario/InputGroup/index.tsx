import * as S from "./styles"
export interface IInput {
  label?: string
  inputname?: string
  inputtype: "text" | "tel" | "email" | "number"
  border?: string
  textlabelcolor?: string
}

const mask = (inputtype: string) => {
  switch (inputtype) {
    case "tel":
      return "(00) 00000-0000"
    default:
      return ""
  }
}

const InputGroup = ({
  inputname, inputtype, label, border, textlabelcolor
}: IInput) => {

  return (
    <S.Group>
      <S.Label textlabelcolor={textlabelcolor}>{label}
        <S.Input mask={mask(inputtype)} required
          type={inputtype} name={inputname}
          id={inputname} border={border}
        />

      </S.Label>
    </S.Group>
  )
}

export default InputGroup