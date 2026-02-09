import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage bootstrap (non-test env)', () => {
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
    process.env.NODE_ENV = 'production';
  });

  afterAll(() => {
    process.env.NODE_ENV = originalEnv;
  });

  test('sets unlocked from /api/status (server cookie)', async () => {
    // Avoid navigation calls while still exercising redirect validation logic.
    window.history.pushState({}, '', '/?redirect=//evil.example');

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ unlocked: true }),
      })
    ) as any;

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Perception Systems For European Defence/i)).toBeInTheDocument();
    });
    expect(localStorage.getItem('swarm_home_unlocked')).toBe('1');
    expect(global.fetch).toHaveBeenCalledWith('/api/status', { credentials: 'include' });
  });

  test('removes stale local unlock when /api/status says locked', async () => {
    localStorage.setItem('swarm_home_unlocked', '1');
    window.history.pushState({}, '', '/');

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ unlocked: false }),
      })
    ) as any;

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Protected Homepage/i)).toBeInTheDocument();
    });
    expect(localStorage.getItem('swarm_home_unlocked')).toBe(null);
  });
});

