import { Link } from 'react-router-dom';
import { LancamentoSection } from './styled';
import { useState } from 'react';

import Header from '../../../../components/Header';
import Card from '../../../../components/Card';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import ComboBox from '../../../../components/ComboBox';
import Button from '../../../../components/Button';
import LancamentoService from '../../../../api/service/LancamentoService';
import DataTable from '../../components/Datatable';
import LancamentoModel from '../../../../@types/LancamentoModel';

const Lancamento = () => {
    document.title = "SmartWallet - Consultar Lançamentos"
    const lancamentoService = new LancamentoService();
    const meses = lancamentoService.obterListaMeses();
    const tipos = lancamentoService.obterListaTipos();

    const [ano, setAno] = useState("");
    const [mes, setMes] = useState("");
    const [tipo, setTipo] = useState("");
    const [showTable, setShowTable] = useState(false);

    function hideTable() {
        setShowTable(false);
    }

    const lancamentos: LancamentoModel[] = [{
        ano: 2022,
        descricao: "Salário",
        valor: 800,
        mes: 12,
        tipo: "Receita",
        status: "Efetivado",
        id: 1
    }]

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
                            inputType='text'
                            inputValue={ano}
                            label="Ano:"
                            inputPlaceholder='Digite o ano'
                            onChangeFunction={e => setAno(e.target.value)}
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
                        <Button title='Consultar' />

                        <Link to="/lancamento"><Button title='Cadastrar Lançamento' /></Link>
                    </div>
                </Card>

                <DataTable isActive={showTable} hideTable={hideTable} lancamentos={lancamentos} />
            </LancamentoSection>
        </>
    );
};

export default Lancamento;