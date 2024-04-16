import { FormEvent, ReactNode, useRef } from "react"
import Swal from 'sweetalert2'

import * as S from "./styles"

export interface IFormProps {
  children?: ReactNode
  bgcolor?: string
  rounded?: string
}

const Form = ({ children, bgcolor, rounded }: IFormProps) => {

  const form = useRef(null)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) 
    const formCourse = formData.get("course")
    const formName = formData.get("name")

    SubmitAlert(formName! , formCourse!)
  }

  const SubmitAlert = (formName: FormDataEntryValue , formCourse: FormDataEntryValue) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Parabéns ${formName} sua inscrição foi realizada com sucesso!`,
      html: "Obrigado por escolher o curso: " + convertCourse(formCourse),
      showConfirmButton: false,
      timer: 5000
    });
  }

  const convertCourse = (formCourse:FormDataEntryValue) => {
    switch (formCourse) {
      case "devfront":
        return "Desenvolvedor Front End"
      case "devback":
        return "Desenvolvedor Back End"
      case "fullstack":
        return "Desenvolvedor Full Stack"
      case "uxui":
        return "UX/UI Designer"
    }
  }

  return (
    <S.Formulario ref={form} onSubmit={(e) => submit(e)} bgcolor={bgcolor} rounded={rounded}>
      {children}
    </S.Formulario>
  )
}

export default Form