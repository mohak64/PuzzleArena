import { render, screen } from '@testing-library/react';
import puzzle1 from './puzzle1';

test('renders learn react link', () => {
  render(<puzzle1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
