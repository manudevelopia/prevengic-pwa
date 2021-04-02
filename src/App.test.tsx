import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task/i);
  expect(linkElement).toBeInTheDocument();
});
