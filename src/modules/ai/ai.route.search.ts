import type { Context } from "hono";
import { Hono } from "hono";
import { handleSearchRequest } from "./ai.service";

// Search route - GET /ai/search?query=&limit=&offset=
const searchRouter = new Hono();

searchRouter.get("/search", async (c: Context) => {
	const query = c.req.query("query");
	const limitParam = c.req.query("limit");
	const offsetParam = c.req.query("offset");

	const limit = limitParam ? Number.parseInt(limitParam, 10) : 10;
	const offset = offsetParam ? Number.parseInt(offsetParam, 10) : 0;

	const result = await handleSearchRequest(query || "", limit, offset);

	if (!result.success) {
		return c.json(
			{
				error: result.error,
				details: result.details,
			},
			result.error === "Query parameter is required" ? 400 : 500,
		);
	}

	return c.json({
		success: result.success,
		query: result.query,
		answer: result.answer,
		people: result.people,
		sources: result.sources,
		total: result.total,
		limit: result.limit,
		offset: result.offset,
		hasMore: result.hasMore,
		timestamp: result.timestamp,
	});
});

export default searchRouter;
