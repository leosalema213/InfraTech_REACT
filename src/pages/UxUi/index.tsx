import P from "../../components/Text"
import Heading, { HeadingSection } from "../../components/Headings"
import Section from "../../components/Section"
import Card from "../../components/Cards/Card"
import GridContainer from "../../components/Containers/GridContainer"
import Accordion from "../../components/Accordion"
import Form from "../../components/Formulario/Form"
import { Select } from "../../components/Formulario/Select"
import InputGroup from "../../components/Formulario/InputGroup"
import Footer from "../../components/Footer"
import Button from "../../components/Buttons/Button"
import Hr from "../../components/Hr"
import Link from "../../components/Link"

import uxUiAnimation from "../../assets/animations/animationUxUi.svg"
import CourseHeader from "../../components/CourseHeader"

interface IContent {
  title: string
  content: string
}


const accordionsItem: IContent[] = [
  {
    title: "Necessidades do usuário",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Prototipagem e microinterações",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Usabilidade e design responsivo",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  },
  {
    title: "Pixel Perfect Design",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium fuga molestiae consequuntur atque. Nisi debitis modi mollitia nostrum tempore illo consectetur architecto ducimus numquam? Animi iste aliquam temporibus sapiente asperiores."
  }
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


export default function UxUiPage() {


  return (
    <>
      <CourseHeader background="linear-gradient(180deg, #3a0436, #f890f1)">
        <div className="content">
          <P color="#ff70f5" fsize="1em">
            Garanta uma carreira de sucesso como
          </P>

          <Heading level={1} fsize="1.8em" content="UX/UI Designer" />


          <div>
            <P color="#ff70f5" fsize="1em">
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
        <img className="animation" src={uxUiAnimation} alt="" />
      </CourseHeader>

      <Section padding="60px 5.6vw" bgcolor="linear-gradient(180deg, #f890f1, #3a0436)">
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

          <HeadingSection color="#3a0436" align="center">
            Oque você ira aprender
          </HeadingSection>

          {accordionsItem.map((item) => (
            <Accordion
              key={item.title}
              titlecolor="#3a0436"
              title={item.title}
              content={item.content}
            />
          ))}

        </div>
      </Section>

      <Hr bordercolor="#3a0436" />

      <Section margin="120px 0 0">
        <div className="container-md">

          <Form bgcolor="#3a0436" rounded="20px">
            <div>
              <P fweight="bold" color="#fff" fsize="24px">Inscreva-se agora</P>
              <P fweight="bold" color="#fff" fsize="18px">venha fazer parte do nosso time!</P>
            </div>

            <Hr bordercolor='#d831cd' />

            <InputGroup
              textlabelcolor="#fff"
              label="Nome"
              inputname="name"
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

            <Select selectname="course" label='Curso de interesse' textlabelcolor="#fff">
              <option value="UX/UI Designer" > Desenvolvedor Front End </option>
            </Select>

            <Button
              bgcolor="#d831cd"
              bgcolorhover="#f856ed"
              textcolor="#fff"
              rounded="10px"
              size="100%"
              type="submit"
              content="Inscreva-se"
            />
          </Form >

        </div >
      </Section>

      <Footer bgcolor='#3a0436'>
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