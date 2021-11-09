import { useAuth0 } from '@auth0/auth0-react'
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn'
import CardContainer from './CardContainer/CardContainer'
import Input from './Input/Input'
import TodosSection from './TodosSection/TodosSection'

const TodosCard = () => {
    const { isAuthenticated } = useAuth0()

    return (
        <CardContainer>
            {isAuthenticated ? (
                <>
                    <Input />
                    <TodosSection />
                </>
            ) : (
                <NotLoggedIn />
            )}
        </CardContainer>
    )
}

export default TodosCard