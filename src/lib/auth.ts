// Checks the Supabase login token sent by the browser.
// If Supabase is not configured on the server, everything stays open (so the site never locks you out by mistake).
export async function authCheck(req: Request): Promise<"open" | "denied" | { id: string }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return "open";
  const h = req.headers.get("authorization") || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : "";
  if (!token) return "denied";
  try {
    const r = await fetch(`${url}/auth/v1/user`, { headers: { apikey: key, Authorization: `Bearer ${token}` } });
    if (!r.ok) return "denied";
    const u = (await r.json()) as { id?: string };
    return u && u.id ? { id: String(u.id) } : "denied";
  } catch {
    return "denied";
  }
}
