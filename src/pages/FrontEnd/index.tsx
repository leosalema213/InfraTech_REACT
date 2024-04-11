import Header from "../../components/Header"
import frontAnimation from "../../assets/animations/animationFrontEnd.svg"
import P from "../../components/P"
import Heading, { HeadingSection } from "../../components/Headings"
import Section from "../../components/Section"
import Card from "../../components/Card"
import GridContainer from "../../components/GridContainer"
import Accordion from "../../components/Accordion"
import Form from "../../components/Form"
import { Select } from "../../components/Select"
import InputGroup from "../../components/InputGroup"
import Border from "../../components/Border"
import Footer from "../../components/Footer"
import Button from "../../components/Button"

const accordionsItem = [
  {
    title: "HTML / CSS",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "JavaScript / jQuery",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
]


export const FrontEndPage = () => {
  return (
    <>
      <Header
        background="linear-gradient(to right, #552c65, #8467bd, #ee93cd);"
        after="1"
      >
        <P color="#0effff" fsize="1em">
          Garanta uma carreira de sucesso como
        </P>

        <Heading level={1} fsize="2em" content="Desenvolvedor Front end" />

        <P color="#FFF" fsize="1em">Para você que não conhece nada de programação</P>
        <P color="#FFF" fsize="1em">Mentores com mais de 10 anos de mercado</P>
        <P color="#FFF" fsize="1em">Garanta seu emprego ou devolvemos seu dinheiro</P>

        <img className="animation" src={frontAnimation} alt="" />
      </Header>

      <Section padding="60px 5.6vw" bgcolor="#552c65">
        <GridContainer gridmd="2" gridlg="4" gap="32px">
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
          <Card padding="12px">
            <Heading level={2} color="#fff">
              Metodos de ensino
            </Heading>
            <P color="#fff" lheight="22px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate dolorum cumque voluptatibus quasi beatae voluptatem amet sunt eum aliquid corporis ratione.
            </P>
          </Card>
        </GridContainer>
      </Section>

      <Section>
        <div className="container">
          <HeadingSection color="#552c65" align="center">
            Oque você ira aprender
          </HeadingSection>

          {accordionsItem.map((item) => (
            <Accordion
              titlecolor="#552c65"
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </Section>

      <Border bordercolor="#552c65" />

      <Section margin="120px 0 0">
        <div className="container">
          <Form bgcolor="#552c65" rounded="20px">
            <div>
              <P fweight="bold" color="#fff" fsize="24px">Inscreva-se agora</P>
              <P fweight="bold" color="#fff" fsize="18px">venha fazer parte do nosso time!</P>
            </div>

            <Border bordercolor='#00a2ff' />

            <InputGroup
              textlabelcolor="#fff"
              label="Nome"
              inputname="nome"
              inputtype="text" />
            <InputGroup
              textlabelcolor="#fff"
              label="Celular"
              inputname="cel"
              inputtype="tel" />
            <InputGroup
              textlabelcolor="#fff"
              label="Email"
              inputname="email"
              inputtype="email" />

            <Select label='Curso de interesse' textlabelcolor="#fff">
              <option defaultValue="valor default" />
              <option value="teste">Desenvolvedor Front End</option>
              <option value="teste">Desenvolvedor Back End</option>
              <option value="teste">Desenvolvedor Full Stack Java</option>
              <option value="teste">UX/UI Designer</option>
            </Select>

            <Button
              bgcolor="#0779bb"
              bgcolorhover="#00a2ff;"
              textcolor="#fff"
              rounded="10px"
              size="100%"
              type="submit"
              content="Inscreva-se"
            />
          </Form >
        </div >
      </Section>

      <Footer bgcolor='#552c65'>
        <P>Voltar para a home</P>
        <P>© Todos os direitos reservados</P>
      </Footer>

    </>
  )
}

export default FrontEndPage