import { AxiosResponse } from "axios";
import Usuario from "../../@types/Usuario";
import ApiService from "../ApiService";

class UsuarioService extends ApiService {

    constructor() {
        super("/api/usuarios");
    }

    autenticar(obj: Usuario): Promise<AxiosResponse> {
        return this.post("/autenticar", obj);
    }

    consultarSaldo(id: number | undefined): Promise<AxiosResponse> {
        return this.get(`/consultarsaldo/${id}`);
    }

    cadastrar(obj: Usuario): Promise<AxiosResponse> {
        return this.post("/salvarusuario", obj);
    }


}

export default UsuarioService;