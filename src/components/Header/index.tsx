import { HeaderComponent } from "./styled";

interface Props {
    children?: JSX.Element;
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <HeaderComponent>
            <div>
                <h2>Smart</h2><h1>Wallet</h1>
            </div>
            {children}
        </HeaderComponent>
    );
};

export default Header;