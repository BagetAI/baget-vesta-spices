import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  const DB_ID = "086395e5-946e-48a5-8664-880c86720d43";

  try {
    const res = await fetch(`https://app.baget.ai/api/public/databases/${DB_ID}/rows`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { email, source: 'api' } }),
    });

    if (res.ok) return NextResponse.json({ success: true });
    return NextResponse.json({ success: false }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}