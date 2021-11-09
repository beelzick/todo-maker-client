import { IoMdAdd } from 'react-icons/io'
import styles from './AddButton.module.css'
import { MouseEventHandler } from 'react'

interface Props {
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const InputButton = ({ disabled, onClick }: Props) => {
    return (
        <button
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
            aria-label='Add todo'
        >
            <IoMdAdd style={{ color: '#fff', fontSize: '35px' }} />
        </button>
    )
}

export default InputButton