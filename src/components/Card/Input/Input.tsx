import styles from './Input.module.css'
import AddButton from '../../AddButton/AddButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, ChangeEvent } from 'react'
import { useCreateTodoMutation } from '../../../lib/generated-types'

const Input = () => {
    const [content, setContent] = useState('')
    const { isAuthenticated, user } = useAuth0()
    const [createTodo] = useCreateTodoMutation()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setContent(value)
    }

    const handleClick = () => {
        createTodo({
            variables: {
                userId: user!.sub!.split('|').pop()!,
                content
            }
        })
        setContent('')
    }

    return (
        <div className={styles.container}>
            <input
                type='input'
                className={styles.input}
                id='content'
                name='content'
                value={content}
                placeholder='Add Todo...'
                disabled={!isAuthenticated}
                onChange={handleChange}
            />
            <AddButton disabled={!isAuthenticated} onClick={handleClick} />
        </div>
    )
}

export default Input