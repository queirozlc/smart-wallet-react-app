import { Link } from 'react-router-dom';
import { LancamentoSection } from './styled';
import { useState } from 'react';
import { errorMessage, successMessage, warningMessage } from '../../../../components/util/Toast';
import { AxiosError } from 'axios';

import LancamentoModel from '../../../../@types/LancamentoModel';
import LocalStorageService from '../../../../api/service/LocalStorageService';

import Header from '../../../../components/Header';
import Card from '../../../../components/Card';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import ComboBox from '../../../../components/ComboBox';
import Button from '../../../../components/Button';
import LancamentoService from '../../../../api/service/LancamentoService';
import DataTable from '../../components/Datatable';

const Lancamento = () => {
    document.title = "SmartWallet - Consultar Lançamentos"
    const lancamentoService = new LancamentoService();
    const meses = lancamentoService.obterListaMeses();
    const tipos = lancamentoService.obterListaTipos();

    const [ano, setAno] = useState<string>("");
    const [mes, setMes] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [showTable, setShowTable] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
    const [lancamentos, setLancamentos] = useState<LancamentoModel[]>([]);
    const [lancamentoDeletar, setLancamentoDeletar] = useState<LancamentoModel>();

    const handleLogout = () => {
        LocalStorageService.remove("usuario_logado");
    }

    const handleConfirmDialogVisibility = (lancamento: LancamentoModel) => {
        setShowConfirmDialog(true);
        setLancamentoDeletar(lancamento);
    }

    const consultarLancamento = async () => {
        const obj: LancamentoModel = {
            valor: 0,
            ano: ano,
            mes: mes,
            tipo: tipo,
            descricao: descricao,
            usuario: LocalStorageService.getItem("usuario_logado"),
        };

        if (!obj.ano) {
            errorMessage("O campo de 'ano' é obrigatório.");
            return;
        }

        try {
            const response = await lancamentoService.buscarLancamento(obj);
            if (!response.data || response.data.length === 0) {
                warningMessage("Não foi encontrado nenhum lançamento.");
                return;
            }
            setLancamentos(response.data);
        } catch (e) {
            const erro = e as AxiosError;
            console.log(erro.response?.data);
        }

        setShowTable(true);
    }

    const deletar = async () => {
        try {
            await lancamentoService.deletar(lancamentoDeletar?.id);
            const listaLancamentos = lancamentos;
            const index = lancamentos.indexOf(lancamentoDeletar as LancamentoModel);
            lancamentos.splice(index, 1);
            setLancamentos(listaLancamentos);
            setShowConfirmDialog(false)
            successMessage("Lançamento deletado com sucesso !");
        } catch (e) {
            const erro = e as AxiosError;
            console.log(erro.response?.data as string);
        }
    }

    const editar = async (id?: number) => {
        console.log(lancamentos);
    }

    return (
        <>
            <Header>
                <nav>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Início</Link>
                            </li>
                        </ul>

                        <ul>
                            <li><Link to="/lancamento">Lançamentos</Link></li>
                        </ul>

                        <ul>
                            <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                </nav>
            </Header>

            <LancamentoSection>
                <Card>
                    <h1>Consulta de Lançamentos</h1>
                    <hr />
                    <Form>
                        <Input
                            inputId='ano'
                            inputName='ano'
                            inputType='number'
                            inputValue={ano}
                            label="Ano:"
                            inputPlaceholder='Digite o ano'
                            onChangeFunction={e => setAno(e.target.value)}
                        />
                        <Input
                            inputId='descricao'
                            inputName='descricao'
                            inputType='text'
                            inputValue={descricao}
                            label="Descrição:"
                            inputPlaceholder='Digite a descrição'
                            onChangeFunction={e => setDescricao(e.target.value)}
                        />
                        <ComboBox
                            listOptions={meses}
                            label="Mês:"
                            selectId='mes'
                            selectName='mes'
                            selectValue={mes}
                            onChange={e => setMes(e.target.value)}
                        />

                        <ComboBox
                            listOptions={tipos}
                            label="Tipo:"
                            selectId='tipo'
                            selectName='tipo'
                            selectValue={tipo}
                            onChange={e => setTipo(e.target.value)}
                        />
                    </Form>

                    <div>
                        <Button title='Consultar' onClick={consultarLancamento} />

                        <Link to="/lancamentocadastro"><Button title='Cadastrar Lançamento' /></Link>
                    </div>
                </Card>

                <DataTable
                    isActive={showTable}
                    hideTable={() => setShowTable(false)}
                    lancamentos={lancamentos}
                    editAction={editar}
                    showConfirmDialog={showConfirmDialog}
                    onHide={() => setShowConfirmDialog(false)}
                    deleteAction={deletar}
                    changeConfirmDialogVisibility={handleConfirmDialogVisibility}
                />
            </LancamentoSection>
        </>
    );
};

export default Lancamento;