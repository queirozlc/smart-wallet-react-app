import { InputContainer } from "./styled";

interface Props {
    inputId: string,
    label: string,
    inputType: string,
    inputName: string,
    inputValue: string,
    inputPlaceholder?: string,
    onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> =
    (
        { inputId, label, inputType, inputName, inputValue, inputPlaceholder, onChangeFunction }
    ) => {
        return (
            <InputContainer>
                <label htmlFor={inputId}>{label}</label>

                <input
                    id={inputId}
                    name={inputName}
                    value={inputValue}
                    placeholder={inputPlaceholder}
                    onChange={onChangeFunction}
                    type={inputType}
                />
            </InputContainer>
        );
    };

export default Input;