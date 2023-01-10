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

}

export default LancamentoService;