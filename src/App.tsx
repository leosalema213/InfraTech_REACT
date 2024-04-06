import { TbDiscount2 } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Parallax } from "react-parallax";

import Header from './components/Header'
import Heading, { HeadingSection } from './components/Headings'

import backgroundHome from './assets/background/home.jpg'
import aboutimage from './assets/section/about.png'
import professor1 from './assets/section/Jaque.png'
import professor2 from './assets/section/Mauricio.png'
import professor3 from './assets/section/leonardo.jpg'
import course1 from './assets/section/courseFront.png'
import course2 from './assets/section/courseBack.png'
import course3 from './assets/section/courseFull.png'
import course4 from './assets/section/courseUxUi.png'

import Border from './components/Border'
import SocialBar, { ISocial } from './components/SocialBar'
import Container from './components/Container'
import Section from './components/Section'
import TeacherCard from './components/TeacherCard'
import CourseCard from './components/CourseCard'
import Form from './components/Form'
import InputGroup from './components/InputGroup'
import Select from './components/Select'
import Footer from "./components/Footer";
import Btn from "./components/Button";


import { GlobalCss } from "./styles";



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


function App() {

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 430) {
      console.log("maior")
    }
  }
  handleScroll()
  return (
    <>
      <GlobalCss />
      <Parallax bgImage={backgroundHome} strength={500}>
        <Header >

          <p style={{ color: '#00a2ff', zIndex: '1' }}>Formação online</p>
          <Heading level={1} content="Cursos Infratech" headingalign='center' />
          <Heading level={2} headingalign='center'>
            Cursos profissinalizantes para o seu crescimento profissional.
          </Heading>
          <Btn
            p="2"
            txtcolor="#00a2ff"
            bgcolor="tranparent"
            bordercolor="#00a2ff"
            content="Inscreva-se"
            animated={true}
            />
          <SocialBar socialList={sociallist} />
        </Header>
      </Parallax>

      <HeadingSection headingbgcolor="#421eaa" headingalign='center'>
        Conheça mais a Infratech
      </HeadingSection>

      <Section> {/* About */}
        <div className="container">
          <Heading level={2} headingcolor='#000' bordercolor='#00a2ff'>Sobre nós </Heading>
          <Border bordercolor='#00a2ff' />
          <Container>
            <img src={aboutimage} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vitae veritatis beatae quibusdam ex aperiam. Architecto reiciendis asperiores odit harum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam,rum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam.
            </p>
          </Container>
        </div>

      </Section>

      <Section> {/* teachers */}
        <div className="container">
          <HeadingSection headingalign="center" headingbgcolor='#00a2ff'  >
            Nossos Professores
          </HeadingSection>

          <Border bordercolor='#00a2ff' />
          <Container display='grid' gridrepeat='3'>


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
          </Container>
        </div>
      </Section>

      <Section> {/* courses */}
        <div className="container">
          <HeadingSection headingalign="center" headingbgcolor='#00a2ff'  >
            Nossos Cursos
          </HeadingSection>

          <Border bordercolor='#00a2ff' />

          <CourseCard
            coursename='Desenvolvedor Front End'
            imageurl={course1}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            buttontext='Saiba mais'
          />
          <CourseCard
            coursename='Desenvolvedor Back End'
            imageurl={course2}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            buttontext='Saiba mais'
            orientation='reverse'
          />
          <CourseCard
            coursename='Desenvolvedor Full Stack'
            imageurl={course3}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            buttontext='Saiba mais'
          />
          <CourseCard
            coursename='UX/UI Designer'
            imageurl={course4}
            description='lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!'
            buttontext='Saiba mais'
            orientation='reverse'
          />
        </div>
      </Section>

      <HeadingSection level={2} headingbgcolor='#421eaa' headingalign='center'>
        <TbDiscount2 color="#00a2ff" size="22px" />
        Desconto disponivel por
      </HeadingSection>

      <Section> {/* Form */}
        <div className="container">
          <Form >
            <Heading level={3} headingcolor='#000'>
              Garanta ja sua vaga
            </Heading>

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

export default App
