import { ReactNode } from 'react'
import styles from './CardContainer.module.css'

interface Props {
    children: ReactNode
}

const TodoListContainer = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.centeredContainer}>
                {children}
            </div>
        </div>
    )
}

export default TodoListContainer