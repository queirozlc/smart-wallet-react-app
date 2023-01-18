import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Lancamento from "../pages/Lancamento/pages/consulta";
import LancamentoCadastro from "../pages/Lancamento/pages/LancamentoCadastro";
import Login from "../pages/Login";
import Error from "../pages/Error";
import AuthService from "../api/service/AuthService";
import { useContext } from "react";

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Cadastro />} />
                <Route path="/*" element={<Error />} />
                <Route
                    path="/"
                    element={AuthService.userAuthenticated() ? <Home /> : <Login />}
                />
                <Route
                    path="/lancamento"
                    element={AuthService.userAuthenticated() ? <Lancamento /> : <Login />}
                />
                <Route
                    path="/lancamentocadastro/:id?"
                    element={AuthService.userAuthenticated() ? <LancamentoCadastro /> : <Login />}
                />
            </Routes>
        </Router>
    );
};

export default Rotas;