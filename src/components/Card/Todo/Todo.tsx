import styles from './Todo.module.css'
import Checkbox from '../../Checkbox/Checkbox'
import DeleteTodo from '../DeleteTodo/DeleteTodo'
import Content from './Content'

interface Props {
    id: string
    content: string
    done: boolean
}

const Todo = ({ id, content, done }: Props) => {
    return (
        <div className={styles.container}>
            <Checkbox id={id} done={done} />
            <Content content={content} done={done} />
            <div className={styles.placeholder} />
            <DeleteTodo id={id} content={content} />
        </div>
    )
}

export default Todo