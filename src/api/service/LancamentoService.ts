import Lancamento from "../../@types/LancamentoModel";
import ApiService from "../ApiService";
import LocalStorageService from "./LocalStorageService";

class LancamentoService extends ApiService {

    constructor() {
        super("api/lancamentos");
    }

    obterListaMeses = (): { label: string, value: string | number }[] => {
        const meses =
            [
                { label: 'Selecione', value: "" },
                { label: 'Janeiro', value: 1 },
                { label: 'Fevereiro', value: 2 },
                { label: 'Março', value: 3 },
                { label: 'Abril', value: 4 },
                { label: 'Maio', value: 5 },
                { label: 'Junho', value: 6 },
                { label: 'Julho', value: 7 },
                { label: 'Agosto', value: 8 },
                { label: 'Setembro', value: 9 },
                { label: 'Outubro', value: 10 },
                { label: 'Novembro', value: 11 },
                { label: 'Dezembro', value: 12 },
            ];
        return meses;
    }

    obterListaTipos = (): { label: string, value: string }[] => {
        const tipos =
            [
                { label: 'Selecione', value: '' },
                { label: 'Receita', value: 'RECEITA' },
                { label: 'Despesa', value: 'DESPESA' }
            ];

        return tipos;
    }

    buscarLancamento(lancamento: Lancamento) {
        let params = `?ano=${lancamento.ano}`;

        if (lancamento.mes) {
            params = `${params}&mes=${lancamento.mes}`;
        }

        if (lancamento.tipo) {
            params = `${params}&tipo=${lancamento.tipo}`;
        }

        if (lancamento.descricao) {
            params = `${params}&descricao=${lancamento.descricao}`;
        }

        if (lancamento.usuario?.id) {
            params = `${params}&usuario=${lancamento.usuario.id}`
        }

        return this.get(params);
    }

    deletar(id?: number) {
        return this.delete(`/deletar/${id}`);
    }
}

export default LancamentoService;