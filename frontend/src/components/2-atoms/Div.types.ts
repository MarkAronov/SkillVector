import type { ComponentProps } from "react";

export type DivVariant = "default" | "flex" | "center" | "stack" | "codeBlock";

export interface DivProps extends ComponentProps<"div"> {
	variant?: DivVariant;
	/** When true, constrains width and centers element (defaults to `max-w-2xl mx-auto`) */
	constrain?: boolean;
	maxWidthClass?: string;
}
