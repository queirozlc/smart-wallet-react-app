import { CadastroSection } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { errorMessage } from '../../components/util/Toast';

import LocalStorageService from '../../api/service/LocalStorageService';
import UsuarioService from '../../api/service/UsuarioService';
import ErroValidacao from '../../exception/ErroValidacao';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Usuario from '../../@types/Usuario';

const Cadastro = () => {
    document.title = "SmartWallet - Cadastro"
    const usuarioService = new UsuarioService();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");



    const criarConta = async () => {
        const obj: Usuario = {
            nome: nome,
            email: email,
            senha: senha,
            senhaConfirmacao: senhaConfirmacao,
        };

        try {
            usuarioService.validar(obj);
        } catch (e) {
            const erro = e as ErroValidacao;
            erro.mensagens.forEach((msg: string) => {
                errorMessage(msg);
            });
            return;
        }

        try {
            const response = await usuarioService.cadastrar(obj);
            LocalStorageService.addItem("usuario_logado", response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Header />

            <CadastroSection>


                <Card>
                    <h1>Crie sua Conta </h1>

                    <Form>
                        <Input
                            inputId='nome'
                            inputName='nome'
                            inputType='text'
                            inputValue={nome}
                            label="Nome:"
                            inputPlaceholder='Digite o nome'
                            onChangeFunction={e => setNome(e.target.value)}
                        />

                        <Input
                            inputId="email"
                            inputName="email"
                            inputType="email"
                            label="Email:"
                            inputValue={email}
                            inputPlaceholder="Digite seu e-email."
                            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />

                        <Input
                            inputId="senha"
                            inputName="senha"
                            inputType="password"
                            label="Senha:"
                            inputValue={senha}
                            inputPlaceholder="Digite sua senha."
                            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                        />

                        <Input
                            inputId="senhaConfirmacao"
                            inputName="senhaConfirmacao"
                            inputType="password"
                            label="Confirmar Senha:"
                            inputValue={senhaConfirmacao}
                            inputPlaceholder="Confirme a senha."
                            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => setSenhaConfirmacao(e.target.value)}
                        />
                    </Form>

                    <Button title='Fazer Cadastro' margin='0 auto' onClick={criarConta} />

                    <p>
                        Já possui uma conta? <Link to="/login">Fazer Login</Link>
                    </p>
                </Card>

            </CadastroSection>

        </>
    );
};

export default Cadastro;