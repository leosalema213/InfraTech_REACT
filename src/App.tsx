import Rotas from "./routes";
import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager } from "styled-components";
import propValid from "@emotion/is-prop-valid"

import { GlobalCss } from "./styles";
import ScrollToTop from "./utils/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={propValid}>
        <GlobalCss />
        <ScrollToTop />
        <Rotas />
      </StyleSheetManager>
    </BrowserRouter >
  )
}

export default App
