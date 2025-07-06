import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments count when button is clicked', () => {

  render(<Counter />);
  const button = screen.getByText('Increment');
  fireEvent.click(button);
  const countText = screen.getByText(/Count: 1/i);
  expect(countText).toBeInTheDocument();

});