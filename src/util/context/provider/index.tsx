import { useState, createContext, useEffect } from "react";
import { AuthService } from "../../../api/service/AuthService";
import { TokenDto } from "../../../@types/TokenDto";
import { Claims } from "../../../@types/Claims";

import jwtDecode from "jwt-decode";

import Usuario from "../../../@types/Usuario";
import LocalStorageService from "../../../api/service/LocalStorageService";

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
        authService.login(usuario, token);
        setUserAuthenticated(usuario);
        setIsAuth(true);
    }

    const closeSession = () => {
        LocalStorageService.remove("usuario_logado");
        setUserAuthenticated(null);
        setIsAuth(false)
    }

    useEffect(() => {
        const isUserAuthenticated = authService.userAuthenticated();
        console.log('Usuario Autenticado', isUserAuthenticated);

        if (isUserAuthenticated) {
            const usuario = authService.refreshSession();
            setIsAuth(true);
            setUserAuthenticated(usuario)
            console.log(isAuth);
        }
    }, []);

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