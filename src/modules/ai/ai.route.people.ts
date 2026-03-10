import type { Context } from "hono";
import { Hono } from "hono";
import { getAllDocuments } from "../../database";

// People route - GET /ai/people?limit=
const peopleRouter = new Hono();

peopleRouter.get("/people", async (c: Context) => {
	const limitParam = c.req.query("limit");
	const limit = limitParam ? Number.parseInt(limitParam, 10) : 100;

	const result = await getAllDocuments("people", limit);

	if (!result.success) {
		return c.json(
			{
				error: result.error,
			},
			500,
		);
	}

	return c.json({
		success: true,
		count: (result.data as unknown[]).length,
		people: result.data,
	});
});

export default peopleRouter;
