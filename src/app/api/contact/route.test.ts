function makeRequest(body: any) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('contact route', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('returns 400 for missing required fields', async () => {
    const { POST } = await import('./route');
    const req = makeRequest({ email: 'max@example.com' });
    const res = await POST(req as any);
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.error).toBe('missing_required_fields');
  });

  it('returns 400 for invalid email', async () => {
    const { POST } = await import('./route');
    const req = makeRequest({
      persona: 'operator',
      intent: 'pilot',
      name: 'Max',
      email: 'invalid',
      message: 'hello',
    });
    const res = await POST(req as any);
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.error).toBe('invalid_email');
  });

  it('returns 201 dev fallback when supabase is not configured', async () => {
    const { POST } = await import('./route');
    const req = makeRequest({
      persona: 'operator',
      intent: 'pilot',
      name: 'Max',
      email: 'max@example.com',
      message: 'hello',
    });
    const res = await POST(req as any);
    const body = await res.json();

    expect(res.status).toBe(201);
    expect(body.ok).toBe(true);
    expect(body.dev).toBe(true);
  });
});
