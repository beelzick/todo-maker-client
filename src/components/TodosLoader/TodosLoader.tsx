import styles from './TodosLoader.module.css'
import Loader from 'react-loader-spinner'

const TodosLoader = () => {
    return (
        <div className={styles.container}>
            <Loader type='Oval' color='#f56476' height={100} width={100} />
        </div>
    )
}

export default TodosLoader