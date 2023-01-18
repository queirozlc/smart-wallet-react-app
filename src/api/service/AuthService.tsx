import { createContext } from "react";
import { useNavigate } from "react-router";
import Usuario from "../../@types/Usuario";
import Login from "../../pages/Login";
import LocalStorageService from "./LocalStorageService";

function AuthService() {
    const navigate = useNavigate();
    const userAuthenticated = (): boolean => {
        const usuarioLogado: Usuario = LocalStorageService.getItem("usuario_logado");
        return usuarioLogado && usuarioLogado.id ? true : false;
    }
    const GenericContext = createContext(userAuthenticated);
}

export default AuthService;