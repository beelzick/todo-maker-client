import { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout