import Rotas from "./routes";
import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager } from "styled-components";
import teste from "@emotion/is-prop-valid"

import { GlobalCss } from "./styles";
import ScrollToTop from "./utils/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={teste}>
        <GlobalCss />
        <ScrollToTop />
        <Rotas />
      </StyleSheetManager>
    </BrowserRouter >
  )
}

export default App
