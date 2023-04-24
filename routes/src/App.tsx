import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./components/Sobre";
import Contato from "./components/Contatos";

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <Home /> }></Route>
          <Route path="/sobre"  element={ <Sobre /> }></Route>
          <Route path="/contato"  element={ <Contato /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}