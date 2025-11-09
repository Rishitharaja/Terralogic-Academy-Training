import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test('increment Counter when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText(/Increment/i);
    const countDisplay = screen.getByTextId('count');

    expect(countDisplay.textContent).toBe('0');
    fireEvent.click(button);
    expect(countDisplay.textContent).toBe('1')
 });