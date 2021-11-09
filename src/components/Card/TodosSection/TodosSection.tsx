import TodosSectionContainer from './TodosSectionContainer'
import { useAuth0 } from '@auth0/auth0-react'
import SubSection from './SubSection/SubSection'
import { useUserQuery } from '../../../lib/generated-types'

const TodosSection = () => {
    const { user, isLoading } = useAuth0()

    if (isLoading) return null

    const { data, loading } = useUserQuery({
        variables: {
            _id: user!.sub!.split('|').pop()!
        }
    })

    if (loading) return null

    const todosUncompleted = data!.user!.todos!.filter(todo => todo!.done !== true)
    const todosCompleted = data!.user!.todos!.filter(todo => todo!.done === true)

    return (
        <TodosSectionContainer>
            <SubSection
                title='Your Todos'
                todos={todosUncompleted}
            />
            <SubSection
                title='Completed'
                todos={todosCompleted}
            />
        </TodosSectionContainer>
    )
}

export default TodosSection