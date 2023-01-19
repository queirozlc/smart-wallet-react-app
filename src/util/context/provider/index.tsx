import { ReactNode, useState, createContext } from "react";
import Usuario from "../../../@types/Usuario";
import { AuthService } from "../../../api/service/AuthService";
import LocalStorageService from "../../../api/service/LocalStorageService";

interface Props {
    children: ReactNode
}

interface IAuthContext {
    userAuthenticated: Usuario | null,
    isAuth: boolean,
    initSession(user: Usuario): void,
    closeSession(): void
}

export const AuthContext = createContext({} as IAuthContext);


const AuthProvider: React.FC<Props> = ({ children }) => {
    const [userAuthenticated, setUserAuthenticated] = useState<Usuario | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const initSession = (user: Usuario) => {
        AuthService.login(user);
        setUserAuthenticated(user);
        setIsAuth(true);
    }

    const closeSession = () => {
        LocalStorageService.remove("usuario_logado");
        setIsAuth(false);
        setUserAuthenticated(null);
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