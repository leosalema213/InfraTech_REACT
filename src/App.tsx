import './global.css'

import Header from './components/Header'
import Heading from './components/Headings'
import backgroundHome from './assets/background/home.jpg'
import { BtnHome } from './components/Button'
import SocialBar, { ISocial } from './components/SocialBar'
import AboutSection from './components/AboutSection'

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


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
        <Heading level={1} content="Cursos Infratech" />
        <Heading level={2}>
          Cursos profissinalizantes para o seu crescimento profissional.
        </Heading>
        <BtnHome>
          Increva-se
        </BtnHome>
        <SocialBar socialList={sociallist} />
      </Header>
      <AboutSection>
          Conhece mais a InfraTech
      </AboutSection>
    </>
  )
}

export default App
