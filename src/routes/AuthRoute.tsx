import { Navigate } from 'react-router';
import { AuthService } from '../api/service/AuthService';

interface Props {
    children: JSX.Element;
}

export const AuthRoute: React.FC<Props> = ({ children }) => {
    const user = AuthService.userAuthenticated();

    return (
        <>
            {user ? children : <Navigate to="/login" />}
        </>
    );
}
