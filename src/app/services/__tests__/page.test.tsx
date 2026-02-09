import { render, screen } from '@testing-library/react';
import ServicesPage from '../page';

describe('Services page', () => {
  it('renders services section and link to contact', () => {
    render(<ServicesPage />);
    expect(screen.getByRole('heading', { name: /^Services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact us to start the discussion/i })).toHaveAttribute('href', '/contact');
  });
});
