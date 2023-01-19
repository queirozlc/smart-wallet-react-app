/* eslint-disable react-hooks/exhaustive-deps */
import { HomeContainer } from "./styled";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

import UsuarioService from "../../api/service/UsuarioService";

import Header from '../../components/Header'
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useAuthContext } from "../../util/hook/hook";
import Usuario from "../../@types/Usuario";

const Home: React.FC = () => {
    document.title = "SmartWallet - Início"
    const usuarioService = new UsuarioService();

    const [nome, setNome] = useState<string | undefined>();
    const [saldo, setSaldo] = useState(0);
    const { userAuthenticated, closeSession } = useAuthContext();

    const handleLogout = () => {
        closeSession();
    }

    useEffect(() => {
        setNome((userAuthenticated as Usuario).nome);
        usuarioService.consultarSaldo((userAuthenticated as Usuario).id)
            .then(response => {
                setSaldo(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, [userAuthenticated]);

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

            <HomeContainer>

                <Card>
                    <h1>Olá {nome}, Seja bem-vindo !</h1>
                    <h2>Seu saldo para o mês atual é: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldo)}</h2>
                    <hr />
                    <h3>Essa é sua área administrativa, você pode navegar no sistema utilizando os botões abaixo.</h3>

                    <div>
                        <Link to="/lancamento"><Button title="Consultar Lançamento" /></Link>
                        <Link to="/lancamentocadastro"><Button title="Cadastrar Lançamento" /></Link>
                    </div>
                </Card>

            </HomeContainer>
        </>
    );
};

export default Home;