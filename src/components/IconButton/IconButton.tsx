import { ReactNode, MouseEventHandler } from 'react'
import styles from './IconButton.module.css'

interface Props {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLDivElement>
}

const IconButton = ({ children, onClick }: Props) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {children}
        </div>
    )
}

export default IconButton