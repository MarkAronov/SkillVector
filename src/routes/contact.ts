import { Hono } from "hono";
import { sendContactEmail } from "../services/contact";

const contactRouter = new Hono();

contactRouter.post("/", async (c) => {
	try {
		const body = await c.req.json();
		const result = await sendContactEmail(body);

		if (result.success) {
			return c.json({ message: "Message sent successfully" }, 200);
		} else {
			return c.json({ error: result.error }, 400);
		}
	} catch (error) {
		// biome-ignore lint/suspicious/noConsole: Error logging for contact endpoint
		console.error("Contact route error:", error);
		return c.json({ error: "Internal server error" }, 500);
	}
});

export default contactRouter;
