import Lancamento from "../../@types/LancamentoModel";
import ErroValidacao from "../../exception/ErroValidacao";
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

    obterListaStatus(): { label: string, value: string }[] {
        const status =
            [
                { label: 'Pendente', value: 'PENDENTE' },
                { label: 'Efetivado', value: 'EFETIVADO' },
                { label: 'Cancelado', value: 'CANCELADO' },
            ];

        return status;
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

    atualizarLancamento(lancamento: Lancamento) {
        return this.put(`/atualizarlancamento/${lancamento.id}`, lancamento);
    }

    salvarLancamento(lancamento: Lancamento) {
        return this.post("/salvarlancamento", lancamento);
    }

    deletar(id?: number) {
        return this.delete(`/deletar/${id}`);
    }

    buscarPorId(id?: number) {
        return this.get(`/${id}`);
    }

    validarLancamento(lancamento: Lancamento): void {
        let mensagens: string[] = [];

        if (!lancamento.ano || !lancamento.mes ||
            !lancamento.descricao || !lancamento.valor ||
            !lancamento.tipo) {
            mensagens.push("Preencha todos os campos.");
        }

        if (!lancamento.usuario) {
            mensagens.push("Usuário não encontrado.");
        }

        if (mensagens && mensagens.length > 0) {
            throw new ErroValidacao(mensagens);
        }
    }

    alterarStatus(obj: Lancamento, status: string) {
        return this.put(`/atualizarstatus/${obj.id}`, { status });
    }
}

export default LancamentoService;