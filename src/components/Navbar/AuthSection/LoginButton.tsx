import Button from '../../Button/Button'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    
    const handleClick = () => {
        loginWithRedirect()
    }

    return (
        <Button onClick={handleClick}>
            Log In
        </Button>
    )
}

export default LoginButton