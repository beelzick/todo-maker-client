import styles from './Todo.module.css'

interface Props {
    content: string
    done: boolean
}

const Content = ({ content, done }: Props) => {
    return (
        <div className={styles.content} style={{ textDecoration: done ? 'line-through' : 'unset' }}>
            {content}
        </div>
    )
}

export default Content