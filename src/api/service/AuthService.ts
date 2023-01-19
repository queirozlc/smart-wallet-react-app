import Usuario from "../../@types/Usuario";
import LocalStorageService from "./LocalStorageService";

export class AuthService {

    static userAuthenticated(): boolean {
        const usuario: Usuario = LocalStorageService.getItem("usuario_logado");
        return usuario && usuario.id ? true : false;
    }

}