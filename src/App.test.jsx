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

test('user can edit an item', () => {
    render(
        <App />
    )
    const preEditItem = screen.getByText(/egg/i)
    expect(preEditItem).toBeInTheDocument();

    const button = screen.getByLabelText(/edit egg/i)
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const formInput = screen.getByLabelText(/egg input/i)   
    expect(formInput).toBeInTheDocument()

    userEvent.type(formInput, 'y bois');
    expect(formInput.value).toBe('Eggy bois')

    const updateButton = screen.getByRole('button', {
        name: /update/i
      })

    expect(updateButton).toBeInTheDocument();

    userEvent.click(updateButton);

    expect(updateButton).not.toBeInTheDocument()

    const postEditItem = screen.getByText(/eggy bois/i);
    expect(postEditItem).toBeInTheDocument()

})