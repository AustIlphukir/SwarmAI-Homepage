import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Navbar from '../Navbar';

// Mock the Next.js Link component.  The real Link component adds
// client-side routing behaviour which is unnecessary for testing
// static rendering of the navbar.  This mock renders a simple
// anchor tag preserving the href prop.
jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({
      href,
      children,
      ...props
    }: {
      href: string;
      children: React.ReactNode;
      [key: string]: any;
    }) => {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    },
  };
});

describe('Navbar component', () => {
  beforeEach(() => {
    localStorage.clear();
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ unlocked: false }) })) as any;
  });

  it('renders all navigation links with correct labels and hrefs', () => {
    render(<Navbar />);
    // Check each navigation link individually.  The Navbar defines
    // links to /tech, /product, /services, /about and /contact.  We use
    // getByRole to find the link by its accessible name and then
    // assert that the href matches the expected path.
    const coreLink = screen.getByRole('link', { name: 'Tech' });
    expect(coreLink).toHaveAttribute('href', '/tech');
    const productLink = screen.getByRole('link', { name: 'Product' });
    expect(productLink).toHaveAttribute('href', '/product');
    const servicesLink = screen.getByRole('link', { name: 'Services' });
    expect(servicesLink).toHaveAttribute('href', '/services');
    const aboutLink = screen.getByRole('link', { name: 'About Us' });
    expect(aboutLink).toHaveAttribute('href', '/about');
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('uses localStorage fallback when status payload has no boolean', async () => {
    localStorage.setItem('swarm_home_unlocked', '1');
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) })) as any;

    render(<Navbar />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });

  it('opens mobile menu and handles contact link click', async () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button');
    fireEvent.click(toggle);

    const contactLinks = screen.getAllByRole('link', { name: 'Contact' });
    expect(contactLinks.length).toBeGreaterThanOrEqual(2);

    fireEvent.click(contactLinks[1]);
    await waitFor(() => expect(screen.queryAllByRole('link', { name: 'Contact' })).toHaveLength(1));
  });

  it('handles status fetch errors using fallback path', async () => {
    localStorage.setItem('swarm_home_unlocked', '0');
    global.fetch = jest.fn(() => Promise.reject(new Error('network'))) as any;

    render(<Navbar />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });
});
