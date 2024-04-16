import Heading, { HeadingSection } from "../../components/Headings"
import P from "../../components/Text"
import Section from "../../components/Section"
import Card from "../../components/Cards/Card"
import GridContainer from "../../components/Containers/GridContainer"
import Accordion from "../../components/Accordion"
import Form from "../../components/Formulario/Form"
import InputGroup from "../../components/Formulario/InputGroup"
import { Select } from "../../components/Formulario/Select"
import Button from "../../components/Buttons/Button"
import Footer from "../../components/Footer"
import Hr from "../../components/Hr"
import Link from "../../components/Link"

import backAniamtion from "../../assets/animations/animationBackEnd.svg"
import CourseHeader from "../../components/CourseHeader"

interface IContent {
  title: string
  content: string
}


const accordionsItem: IContent[] = [
  {
    title: "APIs e páginas geradas pelo servidor ",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Conceitos básicos e lógica de programação",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Interfaces, heranças, composição e agregação",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "SQL",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "ORMS E JPA",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
]

const courseInfos: IContent[] = [
  {
    title: "Métodos de ensino",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Acesso vitalício",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Centro de carreiras",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Projetos práticos",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  }
]


export default function BackEndPage() {
  return (
    <>
      <CourseHeader background="linear-gradient(180deg, #0c3a19, #4ad295)">
        <div className="content">
          <P color="#b2ee0d" fsize="1em">
            Garanta uma carreira de sucesso como
          </P>

          <Heading level={1} fsize="1.8em" content="Desenvolvedor Back end" />


          <div>
            <P color="#b2ee0d" fsize="1em">
              Para quem o curso é indicado?
            </P>
            <P color="#FFF" fsize="1em">
              Para você que não conhece nada de programação
            </P>
            <P color="#FFF" fsize="1em">
              Mentores com mais de 10 anos de mercado
            </P>
            <P color="#FFF" fsize="1em">
              Garanta seu emprego ou devolvemos seu dinheiro
            </P>
          </div>
        </div>
        <img className="animation" src={backAniamtion} alt="" />
      </CourseHeader>

      <Section padding="60px 5.6vw" bgcolor="linear-gradient(180deg, #4ad295,#0c3a19)">
        <GridContainer gridmd="2" gridlg="4" gap="32px">
          {courseInfos.map((item) =>
          (
            <Card key={item.title} padding="12px" bgcolor="rgba(0,0,0,0.1)">
              <Heading level={2} color="#fff">
                {item.title}
              </Heading>
              <P color="#fff" lheight="22px">
                {item.content}
              </P>
            </Card>
          )
          )}
        </GridContainer>
      </Section >

      <Section>

        <div className="container-md">
          <HeadingSection color="#0c3a19" align="center">
            Oque você ira aprender
          </HeadingSection>

          {accordionsItem.map((item) => (
            <Accordion
              key={item.title}
              titlecolor="#0c3a19"
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

      </Section>

      <Hr bordercolor="#0c3a19" />

      <Section margin="120px 0 0">

        <div className="container-md">
          <Form bgcolor="#0c3a19" rounded="20px">
            <div>
              <P fweight="bold" color="#fff" fsize="24px">Inscreva-se agora</P>
              <P fweight="bold" color="#fff" fsize="18px">venha fazer parte do nosso time!</P>
            </div>

            <Hr bordercolor='#268b1d' />

            <InputGroup
              textlabelcolor="#fff"
              label="Nome"
              inputname="name"
              inputtype="text" />
            <InputGroup
              mask="(00) 00000-0000"
              textlabelcolor="#fff"
              label="Celular"
              inputname="cel"
              inputtype="tel" />
            <InputGroup
              textlabelcolor="#fff"
              label="Email"
              inputname="email"
              inputtype="email" />

            <Select selectname="course" label='Curso de interesse' textlabelcolor="#fff">
              <option value="devback" > Desenvolvedor Back End </option>
            </Select>

            <Button
              bgcolor="#268b1d"
              bgcolorhover="#48bd3d"
              textcolor="#fff"
              rounded="10px"
              size="100%"
              type="submit"
              content="Inscreva-se"
            />
          </Form >
        </div >

      </Section>

      <Footer bgcolor='#0c3a19'>
        <Link
          to="/"
          color="#ccc"
          colorhover="#fff"
          content='Voltar para a home'
        />
        <P>© Todos os direitos reservados</P>
      </Footer>

    </>
  )
}
