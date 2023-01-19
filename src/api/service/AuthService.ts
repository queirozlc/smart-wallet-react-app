import Usuario from "../../@types/Usuario";
import LocalStorageService from "./LocalStorageService";

export class AuthService {

    login(user: Usuario) {
        LocalStorageService.addItem("usuario_logado", user);
    }

}