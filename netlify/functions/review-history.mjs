// Shared memory for the review generator (public/review.html).
// Keeps the sentence codes of the last 100 copied reviews so every device can avoid repeating them.
// Only 8-character codes are stored, never review text.
import { getStore } from "@netlify/blobs";

const MAX = 100;
const KEY = "recent";
const CODE = /^[0-9a-f]{8}$/;
const codes = (a) => Array.isArray(a) && a.length > 0 && a.length <= 16 && a.every((x) => typeof x === "string" && CODE.test(x));

export default async (req) => {
  const store = getStore("review-history");
  const list = async () => (await store.get(KEY, { type: "json" })) || [];

  if (req.method === "GET") {
    return Response.json(await list(), { headers: { "cache-control": "no-store" } });
  }
  if (req.method === "POST") {
    let body = null;
    try { body = await req.json(); } catch {}
    if (!body || !codes(body.i) || !codes(body.s)) return new Response("Bad request", { status: 400 });
    const history = await list();
    history.push({ i: body.i, s: body.s });
    await store.setJSON(KEY, history.slice(-MAX));
    return new Response(null, { status: 204 });
  }
  return new Response("Method not allowed", { status: 405, headers: { allow: "GET, POST" } });
};

export const config = { path: "/api/review-history" };
