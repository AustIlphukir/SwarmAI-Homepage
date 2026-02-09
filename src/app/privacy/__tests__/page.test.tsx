import { render, screen } from '@testing-library/react';
import PrivacyPage from '../page';

describe('Privacy page', () => {
  it('renders policy content', () => {
    render(<PrivacyPage />);

    expect(screen.getByRole('heading', { name: /Privacy Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /1\. Controller/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /11\. Last updated/i })).toBeInTheDocument();
    expect(screen.getByText(/February 7, 2026/i)).toBeInTheDocument();
  });
});
