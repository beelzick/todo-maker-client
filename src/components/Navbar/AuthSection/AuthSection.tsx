import LoginButton from './LoginButton'
import styles from './AuthSection.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import Arrow from '../../Arrow/Arrow';

const AuthSection = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return null

    return (
        <div className={styles.container}>
            {isAuthenticated ? (
                <LogoutButton />
            ) : (
                <>
                    <Arrow />
                    <LoginButton />
                </>
            )}
        </div>
    )
}

export default AuthSection