import Header from "../../components/Header"
import frontAnimation from "../../assets/animations/animationFrontEnd.svg"
import P from "../../components/P"
import Heading from "../../components/Headings"

export const FrontEndPage = () => {
  return (
    <>
      <Header
        background="linear-gradient(to right, #552c65, #8467bd, #ee93cd);"
        after="1"
      >
        <P color="#0effff" fsize="16px">
          Garanta uma carreira de sucesso como
        </P>

        <Heading level={1} fsize="2em" content="Desenvolvedor Front end" />

        <P color="#FFF" fsize="14px">Para você que não conhece nada de programação</P>
        <P color="#FFF" fsize="14px">Mentores com mais de 10 anos de mercado</P>
        <P color="#FFF" fsize="14px">Garanta seu emprego ou devolvemos seu dinheiro</P>

        <img className="animation" src={frontAnimation} alt="" />
      </Header>
    </>
  )
}

export default FrontEndPage