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
    expect(screen.getByRole('heading', { name: /Perception Systems For European Defence/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact us/i })).toBeInTheDocument();
  });

  test('renders domain cards and videos', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /Defend against drones/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Core tech/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Core Tech/i })).toBeInTheDocument();
    // video element should be present in the DOM
    expect(document.querySelector('video')).toBeTruthy();
  });
});
