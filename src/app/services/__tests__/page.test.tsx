import { render, screen } from '@testing-library/react';
import ServicesPage from '../page';

describe('Services page', () => {
  it('renders services hero and engagement section', () => {
    render(<ServicesPage />);
    expect(screen.getByRole('heading', { name: /From sensing to decisions/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Engagement model/i })).toBeInTheDocument();
  });
});
