import { render, screen } from '@testing-library/react';
import MarketsPage from '../page';

describe('Markets page', () => {
  it('renders scenario router and scenario links', () => {
    render(<MarketsPage />);

    expect(screen.getByRole('heading', { name: /Choose your scenario/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Civil protection scenarios/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Defense & tactical scenarios/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Airports/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Energy & utilities/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Prisons/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Major events/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Tactical base protection/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Border \/ perimeter/i })).toBeInTheDocument();

    const scenarioLinks = screen.getAllByRole('link', { name: /View scenario/i });
    expect(scenarioLinks.length).toBeGreaterThanOrEqual(6);
  });
});
