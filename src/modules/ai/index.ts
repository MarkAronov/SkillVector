import { Hono } from "hono";
import { aiRateLimiter } from "../../middleware/rate-limiter";
import peopleRouter from "./ai.route.people";
import searchRouter from "./ai.route.search";

// Combined AI router — rate limiting applied once at the module level
const aiRouter = new Hono();

aiRouter.use("/*", aiRateLimiter);

// Mount individual route handlers
aiRouter.route("/", searchRouter); // GET /ai/search
aiRouter.route("/", peopleRouter); // GET /ai/people

export default aiRouter;

export { createBestAvailable } from "./ai.provider.factory";
// Re-export service and factory functions consumed by src/index.ts
export { initializeAIService } from "./ai.service";
