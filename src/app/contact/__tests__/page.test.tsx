import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactPage from '../page';

describe('Contact page', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/contact');
    (global as any).fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the contact form and submits', async () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /Talk to an Engineer/i })).toBeInTheDocument();
    // Fill and submit
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Max' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'max@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByRole('button', { name: /^Send$/i }));
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({
          method: 'POST',
        })
      )
    );
    await waitFor(() => expect(screen.getByText(/Thank you!/i)).toBeInTheDocument());
  });

  it('prefills intent=request-access from query param', async () => {
    window.history.pushState({}, '', '/contact?intent=request-access');
    render(<ContactPage />);
    await waitFor(() => expect(screen.getByRole('heading', { name: /Request Access/i })).toBeInTheDocument());
  });

  it('prefills intent=pilot-discussion from query param', async () => {
    window.history.pushState({}, '', '/contact?intent=pilot-discussion');
    render(<ContactPage />);
    await waitFor(() => expect(screen.getByRole('heading', { name: /Discuss a Pilot/i })).toBeInTheDocument());
  });
});
