import styles from './NotLoggedIn.module.css'
import NotLoggedSvg from './NotLoggedSvg'
import Title from '../Title/Title'

const NotLoggedIn = () => {
    return (
        <div className={styles.container}>
            <Title>
                Log In to add todos
            </Title>
            <NotLoggedSvg />
        </div>
    )
}

export default NotLoggedIn