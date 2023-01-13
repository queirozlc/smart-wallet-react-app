import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";

import LocalStorageService from "../../../../api/service/LocalStorageService";

import Card from "../../../../components/Card";
import Header from "../../../../components/Header";
import Form from "../../../../components/Form";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import ComboBox from "../../../../components/ComboBox";
import LancamentoService from "../../../../api/service/LancamentoService";

const LancamentoCadastro = () => {
    document.title = "SmartWallet - Cadastrar Lançamento"
    const lancamentoService = new LancamentoService();
    const meses = lancamentoService.obterListaMeses();
    const tipos = lancamentoService.obterListaTipos();

    const [descricao, setDescricao] = useState<string>("");
    const [ano, setAno] = useState<string>("");
    const [mes, setMes] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleLogout = () => {
        LocalStorageService.remove("usuario_logado");
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

            <Container>
                <Card>
                    <h1>Cadastro de Lançamentos</h1>
                    <hr />

                    <Form>
                        <Input
                            inputId="descricao"
                            inputName="descricao"
                            inputType="text"
                            inputValue={descricao}
                            label="Descrição"
                            inputPlaceholder="Digite a descrição."
                            onChangeFunction={e => setDescricao(e.target.value)}
                        />

                        <div>
                            <div className="row">
                                <Input
                                    inputId='ano'
                                    inputName='ano'
                                    inputType='number'
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
                            </div>
                        </div>

                        <div>
                            <div className="row-3">
                                <Input
                                    inputId='valor'
                                    inputName='valor'
                                    inputType='number'
                                    inputValue={valor}
                                    label="Valor:"
                                    inputPlaceholder='Digite o valor'
                                    onChangeFunction={e => setValor(e.target.value)}
                                />

                                <ComboBox
                                    listOptions={tipos}
                                    label="Tipo:"
                                    selectId='tipo'
                                    selectName='tipo'
                                    selectValue={tipo}
                                    onChange={e => setTipo(e.target.value)}
                                />

                                <Input
                                    inputId='status'
                                    inputName='status'
                                    inputType='text'
                                    inputValue={status}
                                    label="Status:"
                                    onChangeFunction={e => setStatus(e.target.value)}
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </Form>

                    <div className="btn">
                        <Button title="Cadastrar" />
                        <Link to="/lancamento">
                            <Button title="Consultar Lançamentos" />
                        </Link>
                    </div>
                </Card>
            </Container>
        </>
    );
};

export default LancamentoCadastro;