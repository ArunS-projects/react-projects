import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'John Doe' }),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders user name after fetching', async () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  
  const userName = await waitFor(() => screen.getByText('John Doe'));
  expect(userName).toBeInTheDocument();

});