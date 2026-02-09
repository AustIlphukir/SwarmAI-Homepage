import { GET as statusHandler } from './route';

describe('status route', () => {
  function makeReq(cookieValue?: string) {
    return {
      cookies: {
        get: (name: string) => {
          if (name !== 'swarm_home_unlocked' || cookieValue === undefined) return undefined;
          return { value: cookieValue };
        },
      },
    } as any;
  }

  it('returns unlocked=true when cookie is set to 1', async () => {
    const res = await statusHandler(makeReq('1'));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.unlocked).toBe(true);
  });

  it('returns unlocked=false when cookie is missing', async () => {
    const res = await statusHandler(makeReq());
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.unlocked).toBe(false);
  });

  it('returns unlocked=false on request errors', async () => {
    const res = await statusHandler(undefined as any);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.unlocked).toBe(false);
  });
});
