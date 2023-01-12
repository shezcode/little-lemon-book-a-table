import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

test('renders h something', () => {
  render(<Hero />);
  const linkElement = screen.getByText("Little Lemon");
  expect(linkElement).toBeInTheDocument();
});
