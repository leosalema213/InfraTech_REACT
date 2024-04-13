import Rotas from "./routes";
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from "./styles";
import ScrollToTop from "./utils";


function App() {
  return (
    <BrowserRouter>
       <GlobalCss />
       <ScrollToTop />
       <Rotas />
    </BrowserRouter>
  )
}

export default App
