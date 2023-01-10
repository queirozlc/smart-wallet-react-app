import { CardContainer, Table } from "./styled";
import { RiCloseCircleFill } from 'react-icons/ri'

import LancamentoModel from "../../../../@types/LancamentoModel";

import TableCard from "../TableCard";
import Button from "../../../../components/Button";

interface Props {
    isActive: boolean,
    hideTable: () => void,
    lancamentos: LancamentoModel[];
}

const DataTable: React.FC<Props> = ({ isActive, hideTable, lancamentos }) => {

    const rows = lancamentos.map((lancamento: LancamentoModel) => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{lancamento.valor}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>

                </td>
            </tr>
        );
    });

    return (
        <CardContainer isActive={isActive}>
            <TableCard>
                <div>
                    <RiCloseCircleFill size={25} cursor='pointer' onClick={hideTable} />
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