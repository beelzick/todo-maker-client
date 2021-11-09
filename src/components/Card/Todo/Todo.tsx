import styles from './Todo.module.css'
import Checkbox from '../../Checkbox/Checkbox'
import DeleteTodo from '../DeleteTodo/DeleteTodo'

interface Props {
    id: string
    content: string
    done: boolean
}

const Todo = ({ id, content, done }: Props) => {
    return (
        <div className={styles.container}>
            <Checkbox id={id} done={done} />
            <div className={styles.content} style={{ textDecoration: done ? 'line-through' : 'unset' }}>
                {content}
            </div>
            <div className={styles.placeholder} />
            <DeleteTodo id={id} content={content} />
        </div>
    )
}

export default Todo