import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter'; // Make sure to provide the correct import path

test('Counter increments and decrements correctly', () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
    const counterDisplay = screen.getByText('Counter: 0');

    // Increment the count and check if it's updated
    fireEvent.click(incrementButton);
    expect(counterDisplay).toHaveTextContent('Counter: 1');

    // Decrement the count and check if it's updated
    fireEvent.click(decrementButton);
    expect(counterDisplay).toHaveTextContent('Counter: 0');
});
