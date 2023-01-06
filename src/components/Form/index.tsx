import { FormComponent } from "./styled";

interface Props {
    children: JSX.Element[];
}

const Form: React.FC<Props> = ({ children }) => {
    return (
        <FormComponent>
            {children}
        </FormComponent>
    );
};

export default Form;