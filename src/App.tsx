import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';


import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Lancamento from "./pages/Lancamento/pages/consulta";
import Error from "./pages/Error";
import LancamentoCadastro from "./pages/Lancamento/pages/LancamentoCadastro";

function App() {


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Cadastro />} />
            <Route path="/lancamento" element={<Lancamento />} />
            <Route path="/lancamentocadastro" element={<LancamentoCadastro />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
