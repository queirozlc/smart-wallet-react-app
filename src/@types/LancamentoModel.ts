import Usuario from "./Usuario";

interface Lancamento {
    id?: number,
    descricao?: string,
    mes?: string | number,
    ano: number | string,
    valor: number,
    tipo?: string,
    status?: string,
    usuario?: Usuario
}

export default Lancamento;