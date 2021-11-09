import { ReactNode } from 'react'
import styles from './TodosSection.module.css'

interface Props {
    children: ReactNode
}

const TodosContainer = ({ children }: Props) => {
    return (
        <div className={styles.todosContainer}>
            {children}
        </div>
    )
}

export default TodosContainer