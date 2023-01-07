import { Link } from 'react-router-dom';
import { LancamentoSection } from './styled';
import { useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Form from '../../components/Form';
import ComboBox from '../../components/ComboBox';
import Button from '../../components/Button';

const Lancamento = () => {
    document.title = "Minhas Finanças - Consultar Lançamentos"
    const [ano, setAno] = useState("");
    const [mes, setMes] = useState("");
    const [tipo, setTipo] = useState("");

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

    const tipos =
        [
            { label: 'Selecione', value: '' },
            { label: 'Receita', value: 'RECEITA' },
            { label: 'Despesa', value: 'DESPESA' }
        ];

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

            </LancamentoSection>
        </>
    );
};

export default Lancamento;