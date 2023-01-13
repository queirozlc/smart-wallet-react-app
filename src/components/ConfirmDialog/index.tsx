import { ConfirmContainer, ConfirmStyled } from './styled';
import { RiCloseLine, RiInformationFill } from 'react-icons/ri';


import Button from '../Button';
import LancamentoModel from '../../@types/LancamentoModel';
import Lancamento from '../../@types/LancamentoModel';

interface Props {
    visible: boolean,
    header: string,
    message: string,
    onHide: () => void,
    deleteAction: (lancamento: LancamentoModel) => void,
    lancamentos: Lancamento[];
}

const ConfirmDialog: React.FC<Props> = ({ visible, header, message, onHide, deleteAction }) => {
    return (
        <ConfirmContainer visible={visible}>
            <ConfirmStyled visible={visible}>
                <div>
                    <div>
                        <h3>{header}</h3>
                        <RiCloseLine size={30} onClick={onHide} />
                    </div>

                    <div>
                        <div>
                            <RiInformationFill size={30} />
                            <span>{message}</span>
                        </div>

                    </div>

                    <div>
                        <div>
                            <Button title='Sim' onClick={deleteAction} />
                            <Button title='Não' onClick={onHide} />
                        </div>
                    </div>
                </div>
            </ConfirmStyled>
        </ConfirmContainer >
    );
};

export default ConfirmDialog;