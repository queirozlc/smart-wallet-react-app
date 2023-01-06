import { HeaderComponent } from "./styled";

interface Props {
    children?: JSX.Element;
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <HeaderComponent>
            <div>
                <h2>
                    Smart<span>Wallet</span>
                </h2>
            </div>
            {children}
        </HeaderComponent>
    );
};

export default Header;