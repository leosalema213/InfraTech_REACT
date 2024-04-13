import { TbDiscount2 } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Header from "../../components/Header";
import Heading, { HeadingSection } from '../../components/Headings'

import backgroundHome from '../../assets/backgrounds/home.jpg'
import aboutimage from '../../assets/section/about.png'
import professor1 from '../../assets/section/Jaque.png'
import professor2 from '../../assets/section/Mauricio.png'
import professor3 from '../../assets/section/leonardo.jpg'
import course1 from '../../assets/section/courseFront.png'
import course2 from '../../assets/section/courseBack.png'
import course3 from '../../assets/section/courseFull.png'
import course4 from '../../assets/section/courseUxUi.png'

import SocialBar, { ISocial } from '../../components/SocialBar'
import Section from '../../components/Section'
import TeacherCard from '../../components/TeacherCard'
import CourseCard from '../../components/CourseCard'
import Form from '../../components/Form'
import InputGroup from '../../components/InputGroup'
import Select from '../../components/Select'
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import P from "../../components/P";
import FlexContainer from "../../components/FlexContainer";
import GridContainer from "../../components/GridContainer";
import ButtonHome from "../../components/ButtonHome";
import Hr from "../../components/Hr";
import LinkBar from "../../components/LinkBar";
import { ILink } from "../../components/Link";

const sociallist: ISocial[] = [
  {
    url: "1",
    icon: FaGithub
  },
  {
    url: "3",
    icon: FaLinkedin,
  }
]

const footerLinks: ILink[] = [
  {
    to: "/",
    color: "#ccc",
    colorhover: "#fff",
    content: 'Voltar para a home'
  },
  {
    to: "/",
    color: "#ccc",
    colorhover: "#fff",
    content: 'testando'
  }
]


export default function Home() {


  return (
    <>
      <Header
        after="2"
        background={backgroundHome}
        align="center"
        justify="center"
        gap="20px" >

        <P color="#00a2ff" fsize="18px">formação online</P>
        <Heading level={1} content="Cursos Infratech" align='center' />
        <Heading
          level={2}
          align='center'
          content="Cursos profissinalizantes para o seu crescimento profissional." />
        <ButtonHome
          bgcolor="transparent"
          bgcolorhover="#00a2ff"
          textcolor="#00a2ff"
          bordercolor="#00a2ff"
          textcolorhover="#fff"
          content="Inscreva-se"
        />
        <SocialBar socialList={sociallist} />
          
      </Header>

      <HeadingSection
        bgcolor="#421eaa"
        align='center'
        content="Cursos profissinalizantes para o seu crescimento profissional."
      />
      <Section margin="40px 0"> {/* About */}
        <div className="container">
          <Heading
            level={2}
            color='#000'
            content="Sobre nós " />
          <Hr bordercolor='#00a2ff' />
          <FlexContainer flexsm="column" flexmd="row">
            <img src={aboutimage} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vitae veritatis beatae quibusdam ex aperiam. Architecto reiciendis asperiores odit harum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam,rum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam.
            </p>
          </FlexContainer>
        </div>

      </Section>

      <Section> {/* teachers */}
        <div className="container">
          <HeadingSection
            align="center"
            bgcolor='#00a2ff'
            content="Nossos Professores" />

          <Hr bordercolor='#00a2ff' />
          <GridContainer gridmd='3' gap="20px">


            <TeacherCard
              imageurl={professor1}
              name="Jaqueline Vitoria"
              profession="UX/UI Design"
              description="Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!"
            />

            <TeacherCard
              imageurl={professor2}
              name="Mauricio Goldoni"
              profession="Desenvolvedor BackEnd"
              description="Olá eu sou o Mauricio tenho 21 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!"
            />

            <TeacherCard
              imageurl={professor3}
              name="Leonardo Patrick"
              profession="Desenvolvedor FrontEnd"
              description="Olá eu sou o Leonardo tenho 21 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!"
            />
          </GridContainer>
        </div>
      </Section>

      <Section> {/* courses */}
        <div className="container">
          <HeadingSection
            align="center"
            bgcolor='#00a2ff'
            content=" Nossos Cursos" />
          <Hr bordercolor='#00a2ff' />

          <CourseCard
            coursename='Desenvolvedor Front End'
            imageurl={course1}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
            to="frontend"
          />
          <CourseCard
            coursename='Desenvolvedor Back End'
            imageurl={course2}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
            orientation='reverse'
            to="/backend"
          />
          <CourseCard
            coursename='Desenvolvedor Full Stack'
            imageurl={course3}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
            to="/fullstack"
          />
          <CourseCard
            coursename='UX/UI Designer'
            imageurl={course4}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
            orientation='reverse'
            to="uxui"
          />
          
        </div>
    
      </Section>

      <HeadingSection level={2} bgcolor='#421eaa' align='center'>
        <TbDiscount2 color="#00a2ff" size="22px" />
        Desconto disponivel por
      </HeadingSection>

      <Section margin="60px 0 0"> {/* Form */}
        <div className="container-md">
          <Form >
            <Heading
              level={3}
              color='#000'
              content="Garanta ja sua vaga" />

            <Hr bordercolor='#00a2ff' />

            <InputGroup
              label="Nome"
              inputname="nome"
              inputtype="text"
              border="1px solid #00a2ff" />
            <InputGroup
              label="Celular"
              inputname="cel"
              inputtype="tel"
              border="1px solid #00a2ff" />
            <InputGroup
              label="Email"
              inputname="email"
              inputtype="email"
              border="1px solid #00a2ff" />

            <Select label='Curso de interesse' border="1px solid #00a2ff">
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

      <Footer bgcolor='#421eaa'>
        <LinkBar links={footerLinks} />
        <p>© Todos os direitos reservados</p>
      </Footer>
    </>
  )
}
