import Loader from 'react-loader-spinner'
import styles from './Card.module.css'

const CardLoader = () => {
    return (
        <div className={styles.container}>
            <Loader type='Oval' height={150} width={150} color='#f56476' />
        </div>
    )
}

export default CardLoader