import { render, screen } from '@testing-library/react';
import TechPage from '../page';

describe('Tech page', () => {
  it('renders core sections and footer links', () => {
    render(<TechPage />);

    expect(screen.getByRole('heading', { name: /Core tech in detail/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Hardware solution: Sensor system \+ edge node/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /View edge-based 3D reconstruction demo/i })).toHaveAttribute(
      'href',
      'https://3dtwin.3dwe.org/burda_senatorre.html'
    );
    expect(screen.getByRole('link', { name: /View real-time 6D pose estimation/i })).toHaveAttribute('href', '/pose');

    expect(screen.getByRole('link', { name: /Back to home page/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Imprint/i })).toHaveAttribute('href', '/imprint');
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /Get in touch/i })).toHaveAttribute('href', '/contact');
  });
});
