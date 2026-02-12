import React from 'react';
import { render, screen } from '@testing-library/react';

import IntegratorsPage from '../partners/integrators/page';
import ResourcesPage from '../resources/page';
import WhySmallDronesAreHardPage from '../resources/why-small-drones-are-hard/page';
import EdgeVsCentralizedPage from '../resources/edge-vs-centralized-perception/page';
import DataProductsForIntegrationPage from '../resources/data-products-for-integration/page';
import PoseDemoPage from '../pose/page';

import AirportsScenarioPage from '../markets/airports/page';
import EnergyScenarioPage from '../markets/energy/page';
import PrisonsScenarioPage from '../markets/prisons/page';
import EventsScenarioPage from '../markets/events/page';
import InterceptorGuidanceScenarioPage from '../markets/interceptor-guidance/page';
import BorderPerimeterScenarioPage from '../markets/border-perimeter/page';

describe('Funnel new pages (smoke)', () => {
  test('renders integrators landing', () => {
    const { unmount } = render(<IntegratorsPage />);
    expect(screen.getByRole('heading', { name: /Integrate perception modules/i })).toBeInTheDocument();
    unmount();
  });

  test('renders resources hub and articles', () => {
    const r0 = render(<ResourcesPage />);
    expect(screen.getByRole('heading', { name: /Practical notes on drone detection/i })).toBeInTheDocument();
    r0.unmount();

    const r1 = render(<WhySmallDronesAreHardPage />);
    expect(screen.getByRole('heading', { name: /Why small drones are hard to detect/i })).toBeInTheDocument();
    r1.unmount();

    const r2 = render(<EdgeVsCentralizedPage />);
    expect(screen.getByRole('heading', { name: /Edge vs centralized perception/i })).toBeInTheDocument();
    r2.unmount();

    const r3 = render(<DataProductsForIntegrationPage />);
    expect(screen.getByRole('heading', { name: /Data products for integration/i })).toBeInTheDocument();
    r3.unmount();
  });

  test('renders pose demo', () => {
    const { unmount } = render(<PoseDemoPage />);
    expect(screen.getByRole('heading', { name: /Real-time 6D pose estimation/i })).toBeInTheDocument();
    unmount();
  });

  test('renders scenario pages', () => {
    const a = render(<AirportsScenarioPage />);
    expect(screen.getByRole('heading', { name: /Airports/i })).toBeInTheDocument();
    a.unmount();

    const e = render(<EnergyScenarioPage />);
    expect(screen.getByRole('heading', { name: /Energy & utilities/i })).toBeInTheDocument();
    e.unmount();

    const p = render(<PrisonsScenarioPage />);
    expect(screen.getByRole('heading', { name: /Prisons/i })).toBeInTheDocument();
    p.unmount();

    const ev = render(<EventsScenarioPage />);
    expect(screen.getByRole('heading', { name: /Major events/i })).toBeInTheDocument();
    ev.unmount();

    const i = render(<InterceptorGuidanceScenarioPage />);
    expect(screen.getByRole('heading', { name: /Interceptor data & AI guidance/i })).toBeInTheDocument();
    i.unmount();

    const b = render(<BorderPerimeterScenarioPage />);
    expect(screen.getByRole('heading', { name: /Border \/ perimeter/i })).toBeInTheDocument();
    b.unmount();
  });
});
