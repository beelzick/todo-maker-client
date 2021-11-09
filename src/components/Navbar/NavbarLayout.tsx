import { ReactNode } from 'react'
import styles from './Navbar.module.css'

interface Props {
    children: ReactNode
}

const NavbarLayout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default NavbarLayout