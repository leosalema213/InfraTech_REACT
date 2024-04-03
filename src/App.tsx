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

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Card from './components/Card'
import Border from './components/Border'
import Form from './components/Form'
import InputGroup from './components/InputGroup'
import Select from './components/Select'



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
        </Heading>4
        <BtnHome type='button'>
          Increva-se
        </BtnHome>
        <SocialBar socialList={sociallist} />
      </Header>

      <HeadingSection headingbgcolor="#421eaa" headingalign='center'>
        Conheça mais a Infratech
      </HeadingSection>
      <Section>
        <Border bordercolor='#00a2ff' />
        <Heading level={2} headingcolor='#000' bordercolor='#00a2ff'>Sobre nós </Heading>
        <Card>
          <img src={aboutimage} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vitae veritatis beatae quibusdam ex aperiam. Architecto reiciendis asperiores odit harum, praesentium libero quibusdam possimus! Enim pariatur magnam dignissimos reiciendis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vitae veritatis beatae quibusdam ex aperiam. Architecto reiciendis asperiores odit harum, praesentium libero quibusdam possimus! Enim pariatur magnam dignissimos reiciendis!</p>
        </Card>
      </Section>

      <Section>
        <HeadingSection headingalign="center" headingbgcolor='#00a2ff'  >
          Nossos Professores
        </HeadingSection>

        <Border bordercolor='#00a2ff' />

        <Card boxshadow='default'>
          <img src={professor1} className='rounded' alt="" />
          <Heading level={2} headingcolor='#000' headingalign='center'>Jaqueline Vitoria</Heading>
          <Heading level={3} headingcolor='#000' headingalign='center'>UX/UI Design</Heading>
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
        </Card>
        <Card boxshadow='default'>
          <img src={professor2} className='rounded' alt="" />
          <Heading level={2} headingcolor='#000' headingalign='center'>Mauricio Goldoni</Heading>
          <Heading level={3} headingcolor='#000' headingalign='center'>Desenvolvedor BackEnd</Heading>
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
        </Card>
        <Card boxshadow='default'>
          <img src={professor3} className='rounded' alt="" />
          <Heading level={2} headingcolor='#000' headingalign='center'>Leoanrdo Patrick</Heading>
          <Heading level={3} headingcolor='#000' headingalign='center'>Desenvolvedor FrontEnd</Heading>
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
        </Card>
      </Section>

      <Section>
        <HeadingSection headingalign="center" headingbgcolor='#00a2ff'  >
          Nossos Cursos
        </HeadingSection>

        <Border bordercolor='#00a2ff' />

        <Card boxshadow='default'>
          <Heading level={2} headingcolor='#000' headingalign='center'>
            Desenvolvedor Front End
          </Heading>
          <img src={course1} alt="" />
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
          <button>Saiba mais</button>
        </Card>
        <Card boxshadow='default'>
          <Heading level={2} headingcolor='#000' headingalign='center'>
            Desenvolvedor Back End
          </Heading>
          <img src={course2} alt="" />
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
          <button>Saiba mais</button>
        </Card>
        <Card boxshadow='default'>
          <Heading level={2} headingcolor='#000' headingalign='center'>
            Desenvolvedor Full Stack
          </Heading>
          <img src={course3} alt="" />
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
          <button>Saiba mais</button>
        </Card>
        <Card boxshadow='default'>
          <Heading level={2} headingcolor='#000' headingalign='center'>
            UX/UI Designer
          </Heading>
          <img src={course4} alt="" />
          <p>Olá eu sou a jaqueline tenho 20 anos, lorem ipsum dolor sit amet consectetur ipisicing elit. Minima amet tenetur cum beatae velit laborum illum est voluptatum. Quidem modi accusantium quibusdam nihil molestiae deleniti amet nostrum omnis ad magnam!</p>
          <button>Saiba mais</button>
        </Card>
      </Section>

      <HeadingSection level={2} headingbgcolor='#421eaa' headingalign='center'>
        Desconto disponivel por
      </HeadingSection>
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
    </>
  )
}

export default App
