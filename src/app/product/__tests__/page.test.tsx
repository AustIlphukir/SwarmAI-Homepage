import { render, screen } from '@testing-library/react';
import ProductPage from '../page';

describe('Product page', () => {
  it('renders the product overview', () => {
    render(<ProductPage />);
    expect(
      screen.getByRole('heading', { name: /Perception-first architecture for low-altitude airspace intelligence/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Product Architecture: Three Deployable Layers/i })).toBeInTheDocument();
  });
});
