import React, { createContext, useState } from 'react';
import Usuario from '../@types/Usuario';
import { AuthService } from '../api/service/AuthService';
import LocalStorageService from '../api/service/LocalStorageService';

interface Props {
    children: JSX.Element;
}
export const AuthenticatorProvider = createContext({});

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [userAuthenticated, setUserAuthenticated] = useState<Usuario | undefined>(undefined);
    const [isAuth, setIsAuth] = useState(false);

    const initSession = (user: Usuario) => {
        AuthService.login(user)
        setIsAuth(true);
        setUserAuthenticated(user);
    }

    const closeSession = () => {
        LocalStorageService.remove("usuario_logado");
        setUserAuthenticated(undefined);
        setIsAuth(false);
    }
    const context = {
        userAuthenticated,
        isAuth,
        initSession,
        closeSession
    }

    return (
        <AuthenticatorProvider.Provider value={context}>
            {children}
        </AuthenticatorProvider.Provider>
    );
};