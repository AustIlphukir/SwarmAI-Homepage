import { render, screen } from '@testing-library/react';
import ImprintPage from '../page';

describe('Imprint page', () => {
  it('renders legal provider details', () => {
    render(<ImprintPage />);

    expect(screen.getByRole('heading', { name: /Imprint \(Impressum\)/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Provider information/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument();
    expect(screen.getByText(/contact@swarm.ai/i)).toBeInTheDocument();
  });
});
