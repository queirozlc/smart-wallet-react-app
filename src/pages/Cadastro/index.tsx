import { CadastroSection } from './styled';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { useState } from 'react';
import Button from '../../components/Button';

const Cadastro = () => {
    document.title = "Minhas Finanças - Cadastro"

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

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
                            inputId="senha"
                            inputName="senha"
                            inputType="password"
                            label="Confirmar Senha:"
                            inputValue={senhaConfirmacao}
                            inputPlaceholder="Confirme a senha."
                            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => setSenhaConfirmacao(e.target.value)}
                        />
                    </Form>

                    <Button title='Fazer Cadastro' margin='0 auto' />

                    <p>
                        Já possui uma conta? <span>Fazer Login</span>
                    </p>
                </Card>
            </CadastroSection>
        </>
    );
};

export default Cadastro;