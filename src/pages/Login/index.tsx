/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import { LoginSection } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import UsuarioService from "../../api/service/UsuarioService";
import LocalStorageService from "../../api/service/LocalStorageService";

import Usuario from "../../@types/Usuario";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Login = () => {
    document.title = "Minhas Finanças - Login"
    const usuarioService = new UsuarioService();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [erro, setErro] = useState<string | any>("");

    const autenticar = async () => {
        const obj: Usuario = {
            email: email,
            senha: senha,
        };
        try {
            const response = await usuarioService.autenticar(obj);
            LocalStorageService.addItem("usuario_logado", response.data);
            navigate("/");
        } catch (e) {
            const erro = e as AxiosError;
            setErro(erro.response?.data);
        }
    }

    return (
        <>
            <Header />
            <LoginSection>

                <Card>
                    <h1>Bem-Vindo</h1>

                    <Form>
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
                    </Form>

                    <p>
                        {erro}
                    </p>

                    <Button title="Entrar" margin={"0 auto"} onClick={autenticar} />

                    <p>
                        Ainda não possui uma conta? <Link to="/register">Crie sua Conta</Link>
                    </p>

                </Card>
            </LoginSection>
        </>
    );
}

export default Login;