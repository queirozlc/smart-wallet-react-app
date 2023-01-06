import { HeaderComponent } from "./styled";

interface Props {
    children: JSX.Element;
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <HeaderComponent>
            {children}
        </HeaderComponent>
    );
};

export default Header;