import { TokenDto } from "../../@types/TokenDto";
import { Claims } from "../../@types/Claims";

import Usuario from "../../@types/Usuario";
import LocalStorageService from "./LocalStorageService";
import jwtDecode from 'jwt-decode'
import ApiService from "../ApiService";

const TOKEN = 'access_token';
const USUARIO_LOGADO = 'usuario_logado';
export class AuthService {

    userAuthenticated(): boolean {
        const token = LocalStorageService.getItem(TOKEN);
        const decodedToken: Claims = jwtDecode(token);
        const { exp } = decodedToken;
        const tokenIsValid: boolean = Boolean(Date.now() >= (exp * 1000));
        return !tokenIsValid;
    }

    login(user: Usuario, token: string) {
        LocalStorageService.addItem(USUARIO_LOGADO, user);
        LocalStorageService.addItem(TOKEN, token);
        ApiService.registrarToken(token);
    }

    logout() {
        LocalStorageService.remove(USUARIO_LOGADO);
        LocalStorageService.remove(TOKEN);
    }

    refreshSession(): Usuario {
        const token = LocalStorageService.getItem(TOKEN);
        const usuario = LocalStorageService.getItem(USUARIO_LOGADO);
        this.login(usuario, token);
        return usuario;
    }

}