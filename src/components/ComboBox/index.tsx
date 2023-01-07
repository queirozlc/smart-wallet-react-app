import { ComboBoxContainer } from "./styled";

interface Props {
    listOptions: Array<{ label: string, value: number | string }>,
    selectName: string,
    selectId: string,
    label: string,
    selectValue: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ComboBox: React.FC<Props> = ({ listOptions, selectName, selectId, label, selectValue, onChange }) => {
    const options = listOptions.map((item: { label: string, value: number | string }) => {
        return (
            <option value={item.value}>{item.label}</option>
        )
    });

    return (
        <ComboBoxContainer>
            <label htmlFor={selectId}>{label}</label>

            <select name={selectName} id={selectId} value={selectValue} onChange={onChange}>
                {options}
            </select>
        </ComboBoxContainer>
    );
};

export default ComboBox;