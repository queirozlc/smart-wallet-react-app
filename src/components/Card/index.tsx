import React from 'react';
import { CardGlass } from './styled';

interface Props {
    children: JSX.Element[];
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <CardGlass className='container'>
            {children}
        </CardGlass>
    );
};

export default Card;