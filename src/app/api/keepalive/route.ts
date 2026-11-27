import { NextResponse, connection } from "next/server";

// Called once a day by Vercel (see vercel.json). A small database request keeps the free Supabase project from pausing.
export async function GET() {
  await connection();
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return NextResponse.json({ ok: false });
  try {
    const r = await fetch(`${url}/rest/v1/plans?select=id&limit=1`, { headers: { apikey: key } });
    return NextResponse.json({ ok: r.ok, status: r.status });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
