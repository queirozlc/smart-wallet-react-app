import Lancamento from "../../@types/LancamentoModel";
import ApiService from "../ApiService";

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

        if (lancamento.usuario) {
            params = `${params}&usuario=${lancamento.usuario}`
        }

        return this.get(params);
    }

    salvarLancamento(lancamento: Lancamento) {
        return this.post("/salvarlancamento", lancamento);
    }

    deletar(id?: number) {
        return this.delete(`/deletar/${id}`);
    }

    validarLancamento(lancamento: Lancamento): Array<string> {
        let mensagens: string[] = [];

        if (!lancamento.ano || !lancamento.mes ||
            !lancamento.descricao || !lancamento.valor ||
            !lancamento.tipo) {
            mensagens.push("Preencha todos os campos.");
        }

        if (!lancamento.usuario) {
            mensagens.push("Usuário não encontrado.");
        }

        return mensagens;
    }
}

export default LancamentoService;