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

import Border from '../../components/Border'
import SocialBar, { ISocial } from '../../components/SocialBar'
import Section from '../../components/Section'
import TeacherCard from '../../components/TeacherCard'
import CourseCard from '../../components/CourseCard'
import Form from '../../components/Form'
import InputGroup from '../../components/InputGroup'
import Select from '../../components/Select'
import Footer from "../../components/Footer";
import Btn from "../../components/Button";
import P from "../../components/P";
import FlexContainer from "../../components/FlexContainer";
import GridContainer from "../../components/GridContainer";



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

const Home = () => {
  return (
    <>
      <Header after="2" background={backgroundHome} align="center" justify="center" >
        <P color="#00a2ff" fsize="18px">formação online</P>
        <Heading level={1} content="Cursos Infratech" align='center' />
        <Heading
          level={2}
          align='center'
          content="Cursos profissinalizantes para o seu crescimento profissional." />
        <Btn
          p="2"
          txtcolor="#00a2ff"
          bgcolor="tranparent"
          bordercolor="#00a2ff"
          content="Inscreva-se"
          animated="1"
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
          <Border bordercolor='#00a2ff' />
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

          <Border bordercolor='#00a2ff' />
          <GridContainer  gridmd='3' gap="20px">


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
          <Border bordercolor='#00a2ff' />

          <CourseCard
            coursename='Desenvolvedor Front End'
            imageurl={course1}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
          />
          <CourseCard
            coursename='Desenvolvedor Back End'
            imageurl={course2}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
            orientation='reverse'
          />
          <CourseCard
            coursename='Desenvolvedor Full Stack'
            imageurl={course3}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
          />
          <CourseCard
            coursename='UX/UI Designer'
            imageurl={course4}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            content='Saiba mais'
            orientation='reverse'
          />
        </div>
      </Section>

      <HeadingSection  level={2} bgcolor='#421eaa' align='center'>
        <TbDiscount2 color="#00a2ff" size="22px" />
        Desconto disponivel por
      </HeadingSection>

      <Section> {/* Form */}
        <div className="container">
          <Form >
            <Heading
              level={3}
              color='#000'
              content="Garanta ja sua vaga" />

            <Border bordercolor='#00a2ff' />

            <InputGroup label="Nome" inputname="nome" inputtype="text" color="#00a2ff" />
            <InputGroup label="Celular" inputname="cel" inputtype="tel" color="#00a2ff" />
            <InputGroup label="Email" inputname="email" inputtype="email" color="#00a2ff" />
            <Select label='Curso de interesse' color="#00a2ff" >
              <option defaultValue="valor default" />
              <option value="teste">Desenvolvedor Front End</option>
              <option value="teste">Desenvolvedor Back End</option>
              <option value="teste">Desenvolvedor Full Stack Java</option>
              <option value="teste">UX/UI Designer</option>
            </Select>
            <Btn
              p="2"
              txtcolor="#fff"
              bgcolor="#00a2ff"
              bordercolor="#00a2ff"
              content="Inscreva-se"
              width="100%"
              type="submit"
            />
          </Form >
        </div >
      </Section>

      <Footer bgcolor='#421eaa'>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </>
  )
}

export default Home