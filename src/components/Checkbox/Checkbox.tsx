import styles from './Checkbox.module.css'
import { useState, useEffect, ChangeEvent } from 'react'
import { useSetTodoDoneMutation } from '../../lib/generated-types'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
    id: string
    done: boolean
}

const Checkbox = ({ id, done }: Props) => {
    const [setTodo] = useSetTodoDoneMutation()
    const { user } = useAuth0()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            variables: {
                todoId: id,
                userId: user!.sub!.split('|').pop()!,
                done: e.target.checked
            },
            optimisticResponse: {
                setTodoDone: {
                    __typename: 'Todo',
                    _id: id,
                    done: e.target.checked
                }
            },
        })
    }

    return (
        <div className={styles.container}>
            <input type='checkbox' defaultChecked={done} id={id} onChange={handleChange} />
            <label htmlFor={id} />
        </div>
    )
}

export default Checkbox