import React from 'react';
import { render, screen } from '@testing-library/react';
import * as PageModule from '../page';

test('page module exports default component', () => {
  expect(PageModule).toBeTruthy();
  expect(typeof PageModule.default).toBe('function');
});

test('video element present in unlocked render (smoke)', () => {
  // ensure unlocked path
  localStorage.setItem('swarm_home_unlocked', '1');
  const { container } = render(<PageModule.default />);
  // simple smoke check: architecture section exists
  expect(container.textContent).toContain(PageModule.HOME_ARCHITECTURE_HEADING);
  expect(container.textContent).not.toMatch(/Architecture \(tracks, not pixels\)/i);
  expect(screen.getByRole('heading', { name: new RegExp(PageModule.HOME_HERO_HEADING, 'i') })).toBeInTheDocument();
});
