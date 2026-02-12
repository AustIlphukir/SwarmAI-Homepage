import { render, screen } from '@testing-library/react';
import ScenariosPage, {
  MARKETS_CRITICAL_INFRA_SECTION_TITLE,
  MARKETS_DEFENSE_SECTION_TITLE,
  MARKETS_PAGE_TITLE,
} from '../page';

function escapedRegex(text: string) {
  return new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}

describe('Scenarios page', () => {
  it('renders scenario router and scenario links', () => {
    render(<ScenariosPage />);

    expect(screen.getByRole('heading', { name: escapedRegex(MARKETS_PAGE_TITLE) })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: escapedRegex(MARKETS_DEFENSE_SECTION_TITLE) })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: escapedRegex(MARKETS_CRITICAL_INFRA_SECTION_TITLE) })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Airports/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Energy & utilities/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Prisons/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Major events/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Response interface for interceptors/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Border \/ perimeter/i })).toBeInTheDocument();

    const scenarioLinks = screen.getAllByRole('link', { name: /Open scenario/i });
    expect(scenarioLinks.length).toBeGreaterThanOrEqual(6);
  });
});
