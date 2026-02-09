import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage unlocked view', () => {
  beforeEach(() => {
    localStorage.setItem('swarm_home_unlocked', '1');
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('renders hero text and contact link', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /Protect critical airspace with reliable early drone detection/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Discuss a pilot/i })).toBeInTheDocument();
  });

  test('renders routing cards and architecture section', () => {
    render(<HomePage />);
    expect(screen.getByRole('link', { name: /Explore scenarios/i })).toHaveAttribute('href', '/markets#civil');
    expect(screen.getByRole('link', { name: /Integration path/i })).toHaveAttribute('href', '/partners/integrators');
    expect(screen.getByRole('heading', { name: /Architecture for real operations/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Architecture \(tracks, not pixels\)/i })).not.toBeInTheDocument();
  });
});
