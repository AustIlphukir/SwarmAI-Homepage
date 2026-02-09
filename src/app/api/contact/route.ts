import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const CONTACT_TABLE = process.env.CONTACT_TABLE || 'contact_requests';

let supabase: SupabaseClient | null = null;
if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
} else {
  console.warn('[contact] Missing Supabase env vars');
}

function json(body: unknown, status = 200) {
  const res = NextResponse.json(body, { status });
  res.headers.set('Cache-Control', 'no-store');
  return res;
}

function cleanText(input: unknown, maxLen: number): string {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, maxLen);
}

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  const persona = cleanText(body?.persona, 32);
  const intent = cleanText(body?.intent, 32);
  const name = cleanText(body?.name, 128);
  const org = cleanText(body?.org, 128) || null;
  const email = cleanText(body?.email, 256).toLowerCase();
  const scenario = cleanText(body?.scenario, 64) || null;
  const timeline = cleanText(body?.timeline, 32) || null;
  const constraints = cleanText(body?.constraints, 2000) || null;
  const message = cleanText(body?.message, 4000);

  if (!persona || !intent || !name || !email || !message) {
    return json({ error: 'missing_required_fields' }, 400);
  }
  if (!validEmail(email)) {
    return json({ error: 'invalid_email' }, 400);
  }

  if (!supabase) {
    console.log('[contact] DEV fallback (no Supabase):', {
      persona,
      intent,
      email,
    });
    return json({ ok: true, dev: true }, 201);
  }

  const { error } = await supabase.from(CONTACT_TABLE).insert({
    persona,
    intent,
    name,
    org,
    email,
    scenario,
    timeline,
    constraints,
    message,
  });

  if (error) {
    console.error('[contact] supabase error:', error);
    return json({ error: 'db_error' }, 500);
  }

  return json({ ok: true }, 201);
}
