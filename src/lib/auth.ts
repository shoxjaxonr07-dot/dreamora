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

export type Consume = { ok: boolean; reason?: string; plan?: string; limit?: number; used?: number };

function bearer(req: Request): string {
  const h = req.headers.get("authorization") || "";
  return h.startsWith("Bearer ") ? h.slice(7) : "";
}

async function rpc(req: Request, name: string, body: Record<string, unknown>): Promise<Response | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  const token = bearer(req);
  if (!url || !key || !token) return null;
  try {
    return await fetch(`${url}/rest/v1/rpc/${name}`, {
      method: "POST",
      headers: { apikey: key, Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return null;
  }
}

// Counts one use against the plan. If the database function is not installed yet, or Supabase has a hiccup, it lets the request through.
export async function consume(req: Request, kind: "dream" | "object"): Promise<Consume> {
  const r = await rpc(req, "consume", { kind });
  if (!r || !r.ok) return { ok: true };
  try {
    const j = (await r.json()) as Consume;
    return j && typeof j.ok === "boolean" ? j : { ok: true };
  } catch {
    return { ok: true };
  }
}

// Gives the use back when the AI failed, so people do not lose credits for errors.
export async function refund(req: Request, kind: "dream" | "object"): Promise<void> {
  await rpc(req, "refund", { kind });
}

// Records real token counts, so prices can be checked against real costs.
export async function logUsage(req: Request, kind: string, tin: number, tout: number): Promise<void> {
  await rpc(req, "log_usage", { kind, tin: Math.round(tin) || 0, tout: Math.round(tout) || 0 });
}

export function limitMessage(kind: "dream" | "object", c: Consume): string {
  const what = kind === "dream" ? "dreams" : "AI-made objects";
  return `You have used all ${c.limit ?? ""} ${what} included in your plan this month. See Plans to get more.`.replace("  ", " ");
}
