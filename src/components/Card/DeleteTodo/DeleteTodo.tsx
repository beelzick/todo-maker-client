import { MdDelete } from 'react-icons/md'
import { useDeleteTodoMutation } from '../../../lib/generated-types'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './DeleteTodo.module.css'

interface Props {
    id: string
    content: string
}

const DeleteTodo = ({ id, content }: Props) => {
    const [deleteTodo] = useDeleteTodoMutation()
    const { user } = useAuth0()

    const handleClick = () => {
        deleteTodo({
            variables: {
                userId: user!.sub!.split('|').pop()!,
                todoId: id
            }
        })
    }

    return (
        <button className={styles.container} aria-label={`Delete ${content}`}>
            <MdDelete
                className={styles.icon}
                onClick={handleClick}
                color='#3F3D56'
                size={38}
            />
        </button>
    )
}

export default DeleteTodo