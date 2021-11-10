import styles from './AuthSection.module.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';
import Arrow from '../../Arrow/Arrow';

interface Props {
    isAuth: boolean
}

const IsAuthenticated = ({ isAuth }: Props) => {
    return (
        <div className={styles.container}>
            {isAuth ? (
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

export default IsAuthenticated