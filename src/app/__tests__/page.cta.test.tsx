import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage funnel CTAs', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
  });

  test('locked view shows primary funnel CTAs', () => {
    render(<HomePage />);
    expect(screen.getByRole('link', { name: /Talk to an engineer/i })).toHaveAttribute(
      'href',
      '/contact?intent=talk-to-an-engineer'
    );
    const accessLinks = screen.getAllByRole('link', { name: /Request access/i });
    expect(accessLinks.length).toBeGreaterThanOrEqual(1);
    accessLinks.forEach((link) => expect(link).toHaveAttribute('href', '/contact?intent=request-access'));
  });

  test('unlocked view shows scenario and integration routing', () => {
    localStorage.setItem('swarm_home_unlocked', '1');
    render(<HomePage />);
    expect(screen.getByRole('link', { name: /Explore scenarios/i })).toHaveAttribute('href', '/markets#civil');
    expect(screen.getByRole('link', { name: /Integration path/i })).toHaveAttribute('href', '/partners/integrators');
  });
});
