import { render, screen } from '@testing-library/react';
import App from './App';

test('renders markdown title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Markdown Preview/i);
  expect(linkElement).toBeInTheDocument();
});