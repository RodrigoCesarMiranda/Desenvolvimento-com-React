// src/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders initial counter value', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Contador: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments counter value when "Incrementar" button is clicked', () => {
  render(<Counter />);
  const button = screen.getByText(/Incrementar/i);
  fireEvent.click(button);
  const counterElement = screen.getByText(/Contador: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter value when "Decrementar" button is clicked', () => {
  render(<Counter />);
  const button = screen.getByText(/Decrementar/i);
  fireEvent.click(button);
  const counterElement = screen.getByText(/Contador: -1/i);
  expect(counterElement).toBeInTheDocument();
});
