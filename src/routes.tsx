import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import FrontEndPage from './pages/FrontEnd'
import BackEndPage from './pages/BackEnd'
import FullStackPage from './pages/FullStack'
import UxUiPage from './pages/UxUi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='frontend' element={<FrontEndPage/>} />
    <Route path='backend' element={<BackEndPage/>} />
    <Route path='fullstack' element={<FullStackPage/>} />
    <Route path='uxui' element={<UxUiPage/>} />
  </Routes>
)

export default Rotas
