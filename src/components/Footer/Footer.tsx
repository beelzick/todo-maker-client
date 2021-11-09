import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            &copy; Todo Maker {new Date().getFullYear()}
        </footer>
    )
}

export default Footer