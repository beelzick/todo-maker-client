import IsAuthenticated from './IsAuthenticated';
import { render, screen } from '@testing-library/react';

test('if logged in show log out button', () => {
    render(<IsAuthenticated isAuth={true} />)

    expect(screen.getByRole('button', { name: /log out/i }))
})

test('if not logged in show log in button', () => {
    render(<IsAuthenticated isAuth={false} />)
    expect(screen.getByRole('button', { name: /log in/i }))

})
