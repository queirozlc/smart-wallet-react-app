import { AxiosResponse } from "axios";

import Usuario from "../../@types/Usuario";
import ErroValidacao from "../../exception/ErroValidacao";
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

    validar(obj: Usuario): void {
        const mensagens = [];

        if (!obj.nome || !obj.email || !obj.senha || !obj.senhaConfirmacao) {
            mensagens.push("Preencha todos os campos.");
        }

        if (obj.email && !obj.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            mensagens.push("Informe um email válido.");
        }

        if (obj.senha !== obj.senhaConfirmacao) {
            mensagens.push("As senhas não coincidem.");
        }

        if (mensagens && mensagens.length > 0) {
            throw new ErroValidacao(mensagens);
        }
    }
}

export default UsuarioService;