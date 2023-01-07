import { HomeContainer } from "./styled";
import { Link } from 'react-router-dom'
import { useState } from "react";

import Header from '../../components/Header'
import Card from "../../components/Card";
import Button from "../../components/Button";

const Home: React.FC = () => {
    document.title = "Minhas Finanças - Início"
    const [nome, setNome] = useState("Lucas");
    const [saldo, setSaldo] = useState(0);

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
                            <li><Link to="/">Lançamentos</Link></li>
                        </ul>
                    </div>
                </nav>
            </Header>

            <HomeContainer>

                <Card>
                    <h1>Olá {nome}, Seja bem-vindo !</h1>
                    <h2>Seu saldo para o mês atual é: {saldo}</h2>
                    <hr />
                    <h3>Essa é sua área administrativa, você pode navegar no sistema utilizando os botões abaixo.</h3>

                    <div>
                        <Button title="Consultar Lançamento" />
                        <Button title="Cadastrar Lançamento" />
                    </div>
                </Card>

            </HomeContainer>
        </>
    );
};

export default Home;