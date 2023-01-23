interface Lancamento {
    id?: number,
    descricao?: string,
    mes?: string | number,
    ano: number | string,
    valor: number,
    tipo?: string,
    status?: string,
    usuario?: number,
}

export default Lancamento;