import { render, screen } from '@testing-library/react';
import TechPage from '../page';

describe('Tech page', () => {
  it('renders core sections and footer links', () => {
    render(<TechPage />);

    expect(
      screen.getByRole('heading', { name: /3D perception and remote sensing engineered for low-altitude, cluttered airspace/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Lineage/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /How we detect & track small drones/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Perception pipeline/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Selected publications & public references/i })).toBeInTheDocument();
    expect(screen.getByText(/We export tracks and events, not pixels/i)).toBeInTheDocument();
    expect(screen.getByText(/Designed for low-latency consumers/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Request EO\/IR continuity demo access/i })).toHaveAttribute(
      'href',
      '/contact?intent=request-access'
    );
    expect(screen.getByRole('link', { name: /View real-time 6D pose estimation/i })).toHaveAttribute('href', '/pose');

    expect(screen.getByRole('link', { name: /Back to home page/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Imprint/i })).toHaveAttribute('href', '/imprint');
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /Get in touch/i })).toHaveAttribute('href', '/contact?intent=talk-to-an-engineer');
  });
});
