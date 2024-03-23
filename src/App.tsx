import './global.css'
import Header from './components/Header'
import Heading from './components/Headings'
import backgroundHome from './assets/background/home.jpg'
import {BtnHome} from './components/Button'

function App() {
  return (
    <>
      <Header background={backgroundHome}>
        <p style={{ color: '#00a2ff', zIndex: '1'}}>Formação online</p>
        <Heading level={1} content="Cursos Infratech" />
        <Heading level={2}>
          Cursos profissinalizantes para o seu crescimento profissional.
        </Heading>
        <BtnHome>
          Increva-se
        </BtnHome>
      </Header>
    </>
  )
}

export default App
