import Todo from '../../Todo/Todo'
import TodosContainer from '../TodosContainer'
import Title from '../../../Title/Title'

interface Props {
    title: string
    todos: ({
        __typename?: 'Todo' | undefined
        _id?: string | null | undefined
        content?: string | null | undefined
        done?: boolean | null | undefined
    } | null | undefined)[]
}

const SubSection = ({ title, todos }: Props) => {
    return (
        <>
            <Title>
                {title}
            </Title>
            <TodosContainer>
                {todos.map((todo) => (
                    <Todo
                        id={todo!._id!}
                        key={todo!._id!}
                        content={todo!.content!}
                        done={todo!.done!}
                    />
                ))}
            </TodosContainer>
        </>
    )
}

export default SubSection