import './global.css'

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

import Btn, { BtnHome } from './components/Button'
import SocialBar, { ISocial } from './components/SocialBar'
import Section from './components/Section'

import { TbDiscount2 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Container from './components/Container'
import Border from './components/Border'
import Form from './components/Form'
import InputGroup from './components/InputGroup'
import Select from './components/Select'
import { FooterContainer } from './components/Footer/styles'
import TeacherCard from './components/TeacherCard'
import CourseCard from './components/CourseCard'



const sociallist: ISocial[] = [
  {
    url: "1",
    icon: FaGithub
  },
  {
    url: "2",
    icon: FaInstagram,
  },
  {
    url: "3",
    icon: FaLinkedin,
  }
]


function App() {
  return (
    <>

      <Header background={backgroundHome}>
        <p style={{ color: '#00a2ff', zIndex: '1' }}>Formação online</p>
        <Heading level={1} content="Cursos Infratech" headingalign='center' />
        <Heading level={2} headingalign='center'>
          Cursos profissinalizantes para o seu crescimento profissional.
        </Heading>
        <BtnHome type='button'>
          Inscreva-se
        </BtnHome>
        <SocialBar socialList={sociallist} />
      </Header>

      <HeadingSection headingbgcolor="#421eaa" headingalign='center'>
        Conheça mais a Infratech
      </HeadingSection>

      <Section> {/* About */}
        <Container>
          <Heading level={2} headingcolor='#000' bordercolor='#00a2ff'>Sobre nós </Heading>
          <Border bordercolor='#00a2ff' />
          <Container display='flex'>
            <img src={aboutimage} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vitae veritatis beatae quibusdam ex aperiam. Architecto reiciendis asperiores odit harum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam,rum, praesentium libero quibusdam possimus! Eniitatis beatae quibusdam ex aperiam.
            </p>
          </Container>
        </Container>

      </Section>

      <Section> {/* teachers */}
        <Container>
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
        </Container>
      </Section>

      <Section> {/* courses */}
        <Container>
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
        </Container>
      </Section>

      <HeadingSection level={2} headingbgcolor='#421eaa' headingalign='center'>
        <TbDiscount2 color="#00a2ff" size="22px" />
        Desconto disponivel por
      </HeadingSection>

      <Section> {/* Form */}
        <Container display='flex'>
          <Form>
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

            <Btn type="submit" width='100'>Enviar</Btn>
          </Form >
        </Container>
      </Section>

      <FooterContainer bgcolor='#421eaa'>
        <p>© Todos os direitos reservados</p>
      </FooterContainer>
    </>
  )
}

export default App
