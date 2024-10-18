import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 

test('renders Counter component', () => {
  render(<App />); // Remova `act`
  const counterElement = screen.getByText(/Contador:/i);
  expect(counterElement).toBeInTheDocument();
});
