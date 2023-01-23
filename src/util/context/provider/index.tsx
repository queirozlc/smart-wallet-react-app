import { useState, createContext, useEffect } from "react";
import { AuthService } from "../../../api/service/AuthService";
import { TokenDto } from "../../../@types/TokenDto";
import { Claims } from "../../../@types/Claims";

import jwtDecode from "jwt-decode";

import Usuario from "../../../@types/Usuario";

interface Props {
    children: JSX.Element
}

interface IAuthContext {
    userAuthenticated: Usuario | null,
    isAuth: boolean,
    isLoading: boolean
    initSession(user: Usuario): void,
    closeSession(): void,
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


const AuthProvider: React.FC<Props> = ({ children }) => {
    const [userAuthenticated, setUserAuthenticated] = useState<null | Usuario>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
        authService.logout();
        setUserAuthenticated(null);
        setIsAuth(false)
    }

    useEffect(() => {
        const isUserAuthenticated = authService.userAuthenticated();

        if (isUserAuthenticated) {
            const usuario = authService.refreshSession();
            setIsAuth(true);
            setIsLoading(false)
            setUserAuthenticated(usuario)
        } else {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <AuthContext.Provider value={{
            userAuthenticated,
            isAuth,
            closeSession,
            initSession,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;