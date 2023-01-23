import { Card } from "./styled";

interface Props {
    children: JSX.Element[];
}

const TableCard: React.FC<Props> = ({ children }) => {
    return (
        <Card className="container">
            {children}
        </Card>
    );
};

export default TableCard;