import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import FrontEndPage from './pages/FrontEnd'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='frontend' element={<FrontEndPage/>} />
  </Routes>
)

export default Rotas
