import { ButtonComponent } from "./styled";

interface Props {
    title: string,
    margin?: string
}

const Button: React.FC<Props> = ({ title, margin }) => {
    return (
        <ButtonComponent style={{ margin: margin }}>
            {title}
        </ButtonComponent>
    );
};

export default Button;