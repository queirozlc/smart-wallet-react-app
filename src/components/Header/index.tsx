import { HeaderComponent } from "./styled";

interface Props {
    children?: JSX.Element;
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <HeaderComponent>
            <div>
                <h2>
                    Smart<h3>Wallet</h3>
                </h2>
            </div>
            {children}
        </HeaderComponent>
    );
};

export default Header;