import { useState, createContext } from "react";
import { AuthService } from "../../../api/service/AuthService";
import { TokenDto } from "../../../@types/TokenDto";
import { Claims } from "../../../@types/Claims";

import jwtDecode from "jwt-decode";

import Usuario from "../../../@types/Usuario";
import LocalStorageService from "../../../api/service/LocalStorageService";
import ApiService from "../../../api/ApiService";

interface Props {
    children: JSX.Element
}

interface IAuthContext {
    userAuthenticated: Usuario | null,
    isAuth: boolean,
    initSession(user: Usuario): void,
    closeSession(): void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


const AuthProvider: React.FC<Props> = ({ children }) => {
    const [userAuthenticated, setUserAuthenticated] = useState<null | Usuario>(null);
    const [isAuth, setIsAuth] = useState(false);
    const authService = new AuthService();

    const initSession = (TokenDto: TokenDto) => {
        const { token } = TokenDto;
        const claims: Claims = jwtDecode(token);
        const usuario: Usuario = {
            id: claims.id,
            nome: claims.nome,
        };

        ApiService.registrarToken(token);

        authService.login(usuario);
        setUserAuthenticated(usuario);
        setIsAuth(true);
    }

    const closeSession = () => {
        LocalStorageService.remove("usuario_logado");
        setUserAuthenticated(null);
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{
            userAuthenticated,
            isAuth,
            closeSession,
            initSession
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;