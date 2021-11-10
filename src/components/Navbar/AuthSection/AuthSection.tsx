import { useAuth0 } from '@auth0/auth0-react';
import IsAuthenticated from './IsAuthenticated';

const AuthSection = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return null

    return <IsAuthenticated isAuth={isAuthenticated} />
}

export default AuthSection