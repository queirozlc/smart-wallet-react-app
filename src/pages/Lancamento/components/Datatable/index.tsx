import { CardContainer, Table } from "./styled";
import { RiCloseCircleFill } from 'react-icons/ri'

import LancamentoModel from "../../../../@types/LancamentoModel";

import TableCard from "../TableCard";
import Button from "../../../../components/Button";

interface Props {
    isActive: boolean,
    hideTable: () => void,
    lancamentos: LancamentoModel[],
    deleteAction: (lancamento: LancamentoModel) => void,
    editAction: (id: number | undefined) => void;
}

const DataTable: React.FC<Props> = ({ isActive, hideTable, lancamentos, deleteAction, editAction }) => {
    const rows = lancamentos.map((lancamento: LancamentoModel) => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lancamento.valor)}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <Button title="Editar" onClick={() => editAction(lancamento.id)} />
                    <Button title="Deletar" onClick={() => deleteAction(lancamento)} />
                </td>
            </tr>
        );
    });

    return (
        <CardContainer isActive={isActive}>
            <TableCard>
                <div>
                    <div>
                        <h1>Lançamentos Cadastrados</h1>
                        <RiCloseCircleFill size={25} cursor='pointer' onClick={hideTable} />
                    </div>
                </div>
                <hr />

                <Table>
                    <thead>
                        <tr>
                            <th scope="col">Descrição</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Mês</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </TableCard>
        </CardContainer>
    );
};

export default DataTable;