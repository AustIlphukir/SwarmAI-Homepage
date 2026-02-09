import { POST as lockHandler } from './route';

describe('lock route', () => {
  it('clears unlock cookie', async () => {
    const res = await lockHandler();
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(res.headers.get('Set-Cookie')).toContain('swarm_home_unlocked=');
    expect(res.headers.get('Set-Cookie')).toContain('Max-Age=0');
  });
});
