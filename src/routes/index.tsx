import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";

import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Lancamento from "../pages/Lancamento/pages/consulta";
import LancamentoCadastro from "../pages/Lancamento/pages/LancamentoCadastro";
import Login from "../pages/Login";


const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Cadastro />} />
                <Route path="/*" element={<Error />} />
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <Home />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/lancamento"
                    element={
                        <AuthRoute>
                            <Lancamento />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/lancamentocadastro/:id?"
                    element={
                        <AuthRoute>
                            <LancamentoCadastro />
                        </AuthRoute>}
                />
            </Routes>
        </Router>
    );
};

export default Rotas;