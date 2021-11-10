import Checkbox from './Checkbox'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { SetTodoDoneDocument } from '../../lib/generated-types'

const mocks: any = [{
    request: {
        query: SetTodoDoneDocument,
        variables: { done: true }
    },
    result: {
        data: {
            done: true,
            _id: 'unique-todo-id'
        }
    }
}]

test('if todo done checkbox is checked', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <Checkbox id='todo-unique-id' done={true} />
        </MockedProvider>
    )
    expect(screen.getByTestId('checkbox')).toBeChecked()

})