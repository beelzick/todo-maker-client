import { CgArrowLongRight } from 'react-icons/cg'
import styles from './Arrow.module.css'

const Arrow = () => {
    return (
        <div className={styles.container}>
            <CgArrowLongRight className={styles.arrow} />
        </div>
    )
}
export default Arrow