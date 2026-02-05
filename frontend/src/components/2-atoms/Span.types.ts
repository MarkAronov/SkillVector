import type { ComponentProps } from "react";

export type SpanVariant = "default" | "code" | "badge" | "tag" | "muted";

export interface SpanProps extends ComponentProps<"span"> {
	variant?: SpanVariant;
}
