import { Navigate } from 'react-router';
import { AuthService } from '../api/service/AuthService';
import { useAuthContext } from '../util/hook/hook';

interface Props {
    children: JSX.Element;
}

export const AuthRoute: React.FC<Props> = ({ children }) => {
    const { isAuth } = useAuthContext();

    return (
        <>
            {isAuth ? children : <Navigate to="/login" />}
        </>
    );
}
