import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('user can add an item', () => {
    render(
        <App />
    )

    const itemInput = screen.getByRole('textbox');
    expect(itemInput).toBeInTheDocument();

    userEvent.type(itemInput, 'chicken');
    expect(itemInput.value).toBe('chicken');

    const button = screen.getByRole('button', {
        name: /add item/i
      })
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const item = screen.getByText(/chicken/i)
})