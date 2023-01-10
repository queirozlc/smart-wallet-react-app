import { Link } from "react-router-dom";

const Error = () => {
    document.title = "SmartWallet - Erro 404: Not Found."

    return (
        <div>
            <h2>
                Ops... :/
            </h2>

            <h3>
                Essa página não existe.
            </h3>

            <Link to="/">Voltar para Pagina Inicial</Link>
        </div>
    );
};

export default Error;