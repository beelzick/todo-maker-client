import { useAuth0 } from '@auth0/auth0-react'
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn'
import CardContainer from './CardContainer/CardContainer'
import Input from './AddTodo/AddTodo'
import TodosSection from './TodosSection/TodosSection'
import CardLoader from './CardLoader'

const TodosCard = () => {
    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) return <CardLoader />

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