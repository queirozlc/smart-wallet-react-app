import { ComboBoxContainer } from "./styled";

interface Props {
    listOptions: Array<{ label: string, value: number | string }>,
    selectName: string,
    selectId: string,
    label: string,
    selectValue: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    disabled?: boolean;
}

const ComboBox: React.FC<Props> =
    ({ listOptions, selectName, selectId, label, selectValue, onChange, disabled }) => {
        const options = listOptions.map((item: { label: string, value: number | string }, index) => {
            return (
                <option value={item.value} key={index}>{item.label}</option>
            )
        });

        return (
            <ComboBoxContainer >
                <label htmlFor={selectId}>{label}</label>

                <select
                    name={selectName}
                    id={selectId}
                    value={selectValue}
                    onChange={onChange}
                    disabled={disabled}>
                    {options}
                </select>
            </ComboBoxContainer>
        );
    };

export default ComboBox;