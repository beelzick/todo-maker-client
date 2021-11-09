import Button from '../../Button/Button'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const { logout } = useAuth0()

    const handleClick = () => {
        logout()
    }

    return (
        <Button onClick={handleClick}>
            Log Out
        </Button>
    )
}

export default LogoutButton