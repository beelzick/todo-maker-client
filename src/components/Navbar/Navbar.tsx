import NavbarLayout from './NavbarLayout'
import styles from './Navbar.module.css'
import AuthSection from './AuthSection/AuthSection'

const Navbar = () => {
    return (
        <NavbarLayout>
            <span className={styles.title}>
                Todo Maker
            </span>
            <AuthSection />
        </NavbarLayout>
    )
}

export default Navbar