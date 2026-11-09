import { NextResponse, connection } from "next/server";

// Public values only: the project URL and the publishable key are meant to be visible in the browser.
export async function GET() {
  await connection();
  return NextResponse.json(
    { url: process.env.SUPABASE_URL || "", key: process.env.SUPABASE_PUBLISHABLE_KEY || "" },
    { headers: { "Cache-Control": "no-store" } }
  );
}
