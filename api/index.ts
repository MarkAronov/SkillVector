import { handle } from "hono/vercel";
import app from "../src/index";

/**
 * Vercel serverless entry point — wraps the Hono app with the Vercel adapter.
 *
 * The startup sequence (Qdrant init, AI provider selection, etc.) runs
 * automatically on cold start via runInitialization() in src/index.ts.
 *
 * Required env vars on Vercel:
 *   SKIP_STATIC_DATA=true   — no filesystem for static-data/ in serverless
 *   OPENAI_API_KEY           — or whichever AI provider you're using
 *   QDRANT_HOST              — Qdrant Cloud URL
 *   QDRANT_API_KEY           — Qdrant Cloud API key
 *   FRONTEND_URL             — your Vercel frontend URL (for CORS)
 */
export default handle(app);
