import { ReactNode, MouseEventHandler } from 'react'
import styles from './Button.module.css'

interface Props {
    children: ReactNode
    onClick?: MouseEventHandler
}

const Button = ({ children, onClick }: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button