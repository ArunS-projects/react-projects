import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders the title', () => {
  render(<MyComponent title="Hello, World!" />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('Hello, World!');
});