import { render, screen } from '@testing-library/react';
import MarketsPage from '../page';

describe('Markets page', () => {
  it('renders both market cards and contact paths', () => {
    render(<MarketsPage />);

    expect(screen.getByRole('heading', { name: /Markets/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Zivile Schutzszenarien/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Militaerische Schutzszenarien/i })).toBeInTheDocument();

    const servicesLinks = screen.getAllByRole('link', { name: /Services ansehen/i });
    expect(servicesLinks).toHaveLength(2);
    servicesLinks.forEach((link) => expect(link).toHaveAttribute('href', '/services'));

    const contactLinks = screen.getAllByRole('link', { name: /Projekt anfragen/i });
    expect(contactLinks).toHaveLength(2);
    contactLinks.forEach((link) => expect(link).toHaveAttribute('href', '/contact'));
  });
});
