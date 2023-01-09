import { CadastroSection } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AxiosError } from 'axios';

import LocalStorageService from '../../api/service/LocalStorageService';
import UsuarioService from '../../api/service/UsuarioService';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Usuario from '../../@types/Usuario';

const Cadastro = () => {
    document.title = "Minhas Finanças - Cadastro"
    const usuarioService = new UsuarioService();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

    const validar = (): Array<string> => {
        const mensagens = [""];

        if (!nome || !email || !senha || !senhaConfirmacao) {
            mensagens.push("Preencha todos os campos.");
        }

        if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            mensagens.push("Informe um email válido.");
        }

        if (senha !== senhaConfirmacao) {
            mensagens.push("As senhas não coincidem.");
        }

        return mensagens;
    }

    const criarConta = async () => {
        const msgs = validar();

        const obj: Usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        if (msgs && msgs.length > 0) {
            msgs.forEach(msg => {
            });
            return;
        }

        try {
            const response = await usuarioService.cadastrar(obj);
            LocalStorageService.addItem("usuario_logado", response.data);
            navigate("/");
        } catch (e) {
            const erro = e as AxiosError;
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