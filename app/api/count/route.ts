import { NextResponse } from 'next/server';

export async function GET() {
  const DB_ID = "086395e5-946e-48a5-8664-880c86720d43";
  try {
    const res = await fetch(`https://app.baget.ai/api/public/databases/${DB_ID}/count`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ count: 0 });
  }
}