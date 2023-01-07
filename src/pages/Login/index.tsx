/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import { LoginSection } from "./styled";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Login = () => {
    document.title = "Minhas Finanças - Login"
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("")

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

                    <Button title="Entrar" margin={"0 auto"} />

                    <p>
                        Ainda não possui uma conta? <Link to="/register">Crie sua Conta</Link>
                    </p>


                </Card>
            </LoginSection>
        </>
    );
}

export default Login;