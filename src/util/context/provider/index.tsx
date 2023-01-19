import { useState, createContext } from "react";
import Usuario from "../../../@types/Usuario";
import { AuthService } from "../../../api/service/AuthService";
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
    const [userAuthenticated, setUserAuthenticated] = useState<Usuario | null>(null);
    const authService = new AuthService();

    const initSession = (user: Usuario) => {
        authService.login(user);
        setUserAuthenticated(user);
    }

    const closeSession = () => {
        LocalStorageService.remove("usuario_logado");
        setUserAuthenticated(null);
    }


    return (
        <AuthContext.Provider value={{
            userAuthenticated,
            isAuth: !!userAuthenticated,
            closeSession,
            initSession
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;