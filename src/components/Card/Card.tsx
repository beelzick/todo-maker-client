import { useAuth0 } from '@auth0/auth0-react'
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn'
import CardContainer from './CardContainer/CardContainer'
import Input from './AddTodo/AddTodo'
import TodosSection from './TodosSection/TodosSection'
import Loader from 'react-loader-spinner'

const TodosCard = () => {
    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) return <Loader type='Oval' height={150} width={150} color='#f56476' />

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