interface Lancamento {
    id: number,
    descricao: string,
    mes?: string | number,
    ano: number,
    valor: number,
    tipo?: string,
    status?: string;
}

export default Lancamento;