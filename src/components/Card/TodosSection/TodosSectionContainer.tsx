import { ReactNode } from 'react'
import styles from './TodosSection.module.css'

interface Props {
    children: ReactNode
}

const TodosSectionContainer = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default TodosSectionContainer