import { ButtonComponent } from "./styled";

interface Props {
    title: string,
    margin?: string,
    onClick?: (param?: any) => void;
}

const Button: React.FC<Props> = ({ title, margin, onClick }) => {
    return (
        <ButtonComponent style={{ margin: margin }} onClick={onClick}>
            {title}
        </ButtonComponent>
    );
};

export default Button;