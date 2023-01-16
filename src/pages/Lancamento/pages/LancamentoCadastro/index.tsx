import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styled";
import { AxiosError, AxiosResponse } from "axios";
import { errorMessage, successMessage } from "../../../../components/util/Toast";

import LocalStorageService from "../../../../api/service/LocalStorageService";
import LancamentoService from "../../../../api/service/LancamentoService";
import LancamentoModel from "../../../../@types/LancamentoModel";
import Usuario from "../../../../@types/Usuario";

import Card from "../../../../components/Card";
import Header from "../../../../components/Header";
import Form from "../../../../components/Form";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import ComboBox from "../../../../components/ComboBox";

const LancamentoCadastro = () => {
    document.title = "SmartWallet - Cadastrar Lançamento"
    const lancamentoService = new LancamentoService();
    const meses = lancamentoService.obterListaMeses();
    const tipos = lancamentoService.obterListaTipos();
    const navigate = useNavigate();

    const [descricao, setDescricao] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [ano, setAno] = useState<string>("");
    const [mes, setMes] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleLogout = () => {
        LocalStorageService.remove("usuario_logado");
    }

    const cadastrarLancamento = () => {
        const userLogado: Usuario = LocalStorageService.getItem("usuario_logado");
        const obj: LancamentoModel = {
            descricao,
            ano,
            valor: parseFloat(valor),
            mes,
            tipo,
            usuario: userLogado.id
        };

        const mensagens = lancamentoService.validarLancamento(obj);

        if (mensagens.length > 0 && mensagens) {
            mensagens.forEach((msg: string) => {
                errorMessage(msg);
            });

            return;
        }

        lancamentoService.salvarLancamento(obj)
            .then((response: AxiosResponse<LancamentoModel>) => {
                setId(response.data.id as number);
                successMessage("Lançamento cadastrado com sucesso.");
                navigate("/lancamento");
            }).catch((error: AxiosError) => {
                errorMessage(error.response?.data as string);
            });
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
                                    readonly={id > 0 ? false : true}
                                />
                            </div>
                        </div>
                    </Form>

                    <div className="btn">
                        <Button title="Cadastrar" onClick={cadastrarLancamento} />
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