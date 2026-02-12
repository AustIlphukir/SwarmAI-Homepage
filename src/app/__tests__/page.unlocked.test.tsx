import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage, { HOME_ARCHITECTURE_HEADING, HOME_HERO_HEADING } from '../page';

describe('HomePage unlocked view', () => {
  beforeEach(() => {
    localStorage.setItem('swarm_home_unlocked', '1');
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('renders hero text and contact link', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: new RegExp(HOME_HERO_HEADING, 'i') })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Discuss a pilot/i })).toBeInTheDocument();
  });

  test('renders routing cards and architecture section', () => {
    render(<HomePage />);
    expect(screen.getByRole('link', { name: /Explore applications/i })).toHaveAttribute('href', '/markets#civil');
    expect(screen.getByRole('link', { name: /Integration path/i })).toHaveAttribute('href', '/partners/integrators');
    expect(screen.getByRole('heading', { name: new RegExp(HOME_ARCHITECTURE_HEADING, 'i') })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Architecture \(tracks, not pixels\)/i })).not.toBeInTheDocument();
  });
});
