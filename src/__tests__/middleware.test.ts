import { NextRequest } from 'next/server';
import * as middlewareModule from '../middleware';

// Mock NextResponse to make return values predictable
jest.mock('next/server', () => ({
  NextResponse: {
    next: jest.fn(() => ({ next: true })),
    redirect: jest.fn((url: any) => ({ redirect: true, url })),
  },
}));

describe('middleware', () => {
  const makeReq = (path: string, cookies: Record<string,string> = {}) => {
    // Minimal mock of NextRequest shape used in middleware
    return {
      nextUrl: {
        clone: () => ({ pathname: path, searchParams: new URLSearchParams() }),
      },
      url: 'http://localhost' + path,
      headers: new Map(),
      cookies: {
        get: (name: string) => ({ value: cookies[name] }),
      },
      method: 'GET',
    } as unknown as NextRequest;
  };

  test('allows _next and static paths', () => {
    const req1 = makeReq('/_next/static/file.js');
    const res1 = middlewareModule.middleware(req1 as any);
    expect(res1).toEqual({ next: true });

    const req2 = makeReq('/static/asset.png');
    const res2 = middlewareModule.middleware(req2 as any);
    expect(res2).toEqual({ next: true });
  });

  test('allows public asset folders and extension-based static files', () => {
    const imagesReq = makeReq('/images/logo.png');
    expect(middlewareModule.middleware(imagesReq as any)).toEqual({ next: true });

    const videosReq = makeReq('/videos/demo.mp4');
    expect(middlewareModule.middleware(videosReq as any)).toEqual({ next: true });

    const iconsReq = makeReq('/icons/app.svg');
    expect(middlewareModule.middleware(iconsReq as any)).toEqual({ next: true });

    const cssReq = makeReq('/assets/site.css');
    expect(middlewareModule.middleware(cssReq as any)).toEqual({ next: true });
  });

  test('allows API requests without unlock cookie', () => {
    const req = makeReq('/api/status');
    const res = middlewareModule.middleware(req as any);
    expect(res).toEqual({ next: true });
  });

  test('allows unauthenticated access to contact page', () => {
    const req = makeReq('/contact');
    const res = middlewareModule.middleware(req as any);
    expect(res).toEqual({ next: true });
  });

  test('allows unauthenticated access to imprint page', () => {
    const req = makeReq('/imprint');
    const res = middlewareModule.middleware(req as any);
    expect(res).toEqual({ next: true });
  });

  test('allows when cookie present', () => {
    const req = makeReq('/contact', { swarm_home_unlocked: '1' });
    const res = middlewareModule.middleware(req as any);
    expect(res).toEqual({ next: true });
  });

  test('redirects protected routes to home with redirect query', () => {
    const req = makeReq('/tech');
    const res = middlewareModule.middleware(req as any) as any;
    expect(res.redirect).toBe(true);
    expect(res.url.pathname).toBe('/');
    expect(res.url.searchParams.get('redirect')).toBe('/tech');
  });
});
